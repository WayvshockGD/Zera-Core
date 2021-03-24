import Eris from "eris";

class Embedder {

    public modEmbed(message: Eris.Message, text: { title: string, desc: string }) {
        return message.channel.createMessage({
            embed: {
                title: text.title,
                description: text.desc,
                color: 0xff7542
            }
        })
    }

    public LogEmbed(message: Eris.Message, text: { title: string, desc: string }) {
        return message.channel.createMessage({
            embed: {
                title: text.title,
                description: text.desc,
                color: 0x42ff65
            }
        })
    }
}

export default new Embedder();