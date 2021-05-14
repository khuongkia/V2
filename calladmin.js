module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Chưa có",
	commandCategory: "other",
	usages: "rname",
	cooldowns: 5,
	dependencies: ["request"],}
};

module.exports.run = async ({ api, event, __GLOBAL }) => {
	return require("request")(`https://api.berver.tech/cadao`, (err, response, body) => {
		const data = JSON.parse(body);
		api.sendMessage({body: `${content.data}`, event.threadID, event.senderID);
	});
}
