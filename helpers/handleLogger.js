const {IncomingWebhook} = require('@slack/webhook')
const webHook= new IncomingWebhook(process.env.SLACK_WEBHOOK);
/**
 * Para enviar mensajes a canal de slack
 */
const loggerStream = {
    write: message =>{
     webHook.send({
         text: message
     })
    },
}
module.exports = loggerStream