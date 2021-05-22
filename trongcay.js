const fs = require("fs");
module.exports.config = {
name: "test1",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung (thĂªm random by KhÆ°Æ¡ng)",
	description: "hi",
	commandCategory: "KhĂ´ng cáº§n dáº¥u lá»‡nh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {

var { threadID, messageID } = event;
	if (event.body.indexOf("test 1")==0 ||(event.body.indexOf("Test 1")==0)) {

	var msg = {attcahment: __dirname + "đường dẫn file"};
  
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
//đường dẫn file thì ngâm cứu đê không tự làm sao biết 
