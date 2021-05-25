const fs = require("fs");
module.exports.config = {
name: "phake",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Pha Ke",
	description: "hi",
	commandCategory: ".",
	usages: "noprefix",
	cooldowns: 5,
};
	module.exports.run = async function({ api, event, client, __GLOBAL }) {
var inbox = await api.getThreadList(100, null, ['INBOX']);
	let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
var msg = "" , num = 0 ;
for(let ab of list) {
 var name = ab.name;
var id = ab.threadID
var sotv = ab.participantIDs.length
msg += `${num+=1}. ` + name +"\nTID : " + id + "\nThành Viên : "+sotv+'\n\n'; 
}
return api.sendMessage(`Danh sách các nhóm:\n` + msg), event.threadID); 
}
	}
