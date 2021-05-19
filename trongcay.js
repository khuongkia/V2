
module.exports.config = {
	name: "trongcay",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Economy",
	usages: "work",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.run = async ({ event, api, Currencies, __GLOBAL }) => {
    const { threadID, messageID } = event;
    const cooldown = __GLOBAL.work.cooldownTime;
    const data = (await Currencies.getData(event.senderID)).workTime;
    if (typeof data !== "undefined" && cooldown - (Date.now() - data) > 0) {
        var time = cooldown - (Date.now() - data),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(`Ruộng của bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID, event.messageID);
    }
    else {
        const job = [
            "khế",
            "dưa hấu",
            "dưa leo",
            "bí đao",
            "củ cải",
            "chuối",
            "đu đủ",
            "chanh",
            "xoài",
            "bưởi",
            "cam",
            "chôm chôm",
            "cóc",
            "chùm ruột",
            "dừa",
            "mãng cầu"
        ];
        const amount = Math.floor(Math.random() * 600);
        return api.sendMessage(`Bạn vừa thu hoạch cây ${job[Math.floor(Math.random() * job.length)]} và bán được số tiền là: ${amount} coins`, threadID, async () => {
             await Currencies.increaseMoney(event.senderID, parseInt(amount));
             await Currencies.setData(event.senderID, { workTime: Date.now() });
        }, messageID);
    }
       
}
