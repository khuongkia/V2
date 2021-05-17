module.exports.config = {
        name: "calladmin",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Thọ",
        description: "gửi tin nhắn tới admin của bot",
        commandCategory: "group",
        usages: "calladmin [lời nhắn]",
        cooldowns: 30,
        dependencies :[]
};

module.exports.handleReply = function({ api, event, args, handleReply, client, __GLOBAL }) {
     switch (handleReply.type) {
        case "reply": {
          api.sendMessage(`Phản hồi từ admin:\n${event.body}`,handleReply.threadID,handleReply.messageID)
       break;
        }
          default:
             break;
   }
}

module.exports.run = async function({ api, event, args, Currencies, utils, Users,Threads,__GLOBAL,client}) {
  let {senderID, messageID, threadID} = event
 if (!args[0]) api.sendMessage("Bạn chưa nhập tin nhắn !", threadID,messageID);
   let data = await Users.getData(senderID)
   let thread = await Threads.getData(threadID)
for(var id of __GLOBAL.settings.ADMINBOT){
  api.sendMessage(`[${data.name} - ${senderID}] tại nhóm ${thread.name} nhắn: ${args.join(" ")}`,id)
  await new Promise(resolve => setTimeout(resolve, 1000));
};
  return api.sendMessage("Thông tin của bạn đã được gửi tới các admin",threadID,messageID, (error, info) => {
                        client.handleReply.push({
                            messageID: info.messageID,
                            threadID,
                            type: "reply"
                        })
    })
  }
