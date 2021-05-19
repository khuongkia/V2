module.exports.event = async function({ api, event, Currencies, Users, client }) {
	const {threadID, senderID } = event;
	const { createReadStream, existsSync, mkdirSync } = require("fs-extra");

	const threadData = client.threadSetting.get(threadID.toString()) || {};

	if (typeof threadData["rankup"] != "undefined" && threadData["rankup"] == false) return;
	if (client.inProcess == true) return;

	var exp = parseInt((await Currencies.getData(senderID)).exp);
	exp = exp += 1;

	if (isNaN(exp)) return;

	const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

	if (level > curLevel && level != 1) {
		const nameUser = (await Users.getData(senderID)).name || (await Users.getInfo(senderID)).name;
		var messsage = (typeof threadData.customRankup == "undefined") ? msg = "" : msg = threadData.customRankup,
			arrayContent;

		messsage = messsage
			.replace(/\{name}/g, nameUser)
			.replace(/\{level}/g, level);
	}

	await Currencies.setData(senderID, { exp });
	return;
}
