module.exports.config = {
 name: "callad",
 version: "0.0.0",
 hasPermssion: 0,
 credits: "KhuongKia",
 description: "Gửi tin nhắn đến người điều hành bot",
 commandCategory: "general",
 usages: "đoán xem 🤔",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils, Currencies, Thread, Users}) {
var i = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:mm:ss D/MM/YYYY");
var id = event.threadID;
var b = event.senderID;
var a = "100009568302145";
 var threadInfo = await 
api.getThreadInfo(event.threadID);
    var msg = args.splice(0).join(" ");
    
        return api.sendMessage('⚠ BÁO CÁO ⚠\nID Box: ' + id + '\nName Box: ' + threadInfo.threadName + '\nID người báo cáo:' + b + '\nNội dung: '+ msg + '\n Lúc: ' + i, a).then(
            api.sendMessage('Đã gửi tin nhắn đến admin thành công✅\nVới nội dung:'+ msg + '\n Lúc:' + i , event.threadID, event.messageID));
        }
