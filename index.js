//npm i telegram-bot-api
//npm i nodemon
const TelegApi= require('node-telegram-bot-api');
const token ='6075104808:AAF8pgpnzElHBCcm4pq2SbeMsj-VEpxOthE'

const bot=new TelegApi(token,{polling:true} )

const start = () =>{
    const botOpts = {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [{text:'1', callback_data:'1'}],
                    [{text:'2', callback_data:'2'}],
                    [{text:'3', callback_data:'3'}],
                    
                ]
            }
        )
        
    }
bot.setMyCommands([
        {command:'/game', description:'note'}
    ])
     bot.on('message', async  msg=>{
        const text=msg.text;
        const chatId=msg.chat.id
        if (text === '/game'){
     await bot.sendMessage(chatId, 'Hello',botOpts)}
    
    })
    bot.on('callback_query',  msg=>{
       const data=msg.data;
       const chatId=msg.message.chat.id;
      
      bot.sendMessage(chatId,`${data}`)
     
    
    }) 
    
}

start()