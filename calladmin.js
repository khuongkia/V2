module.exports.config = {
	name: "calladmin",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Gửi tin nhắn đến Admin",
	commandCategory: "System", 
	usages: "calladmin [Tin nhắn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users,__GLOBAL }) {
  var content = args.join(" ")
  let name = (await api.getUserInfo(event.senderID))[event.senderID].name;
  let url = (await api.getUserInfo(event.senderID))[event.senderID].profileUrl;
 const moment = require("moment");
var time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
 if (!content) api.sendMessage("Bạn chưa nhập tin nhắn 💩💩", event.threadID, event.messageID)
  else api.sendMessage(🤡Người Dùng Bot tên: ${name} đã gửi 1 lời dắn đến Admin !\n📱URL: ${url}\n⌚️Thời Gian: ${time}\n🔈Nội dung: ${content} 	__GLOBAL.settings.ADMINBOT, () => api.sendMessage("Okey tin nhắn của bạn đã được gửi tới Admin ❤️❤️", event.threadID, event.messageID))
}
