import Eris from "eris";

import Embedder from "../utility/Embedder";
import Markdown from '../utility/Markdown';
import Utility from "../utility/Utility";
import cron from '../utility/CronJobs';

let newMarkdown = new Markdown();
let newEmbedder = new Embedder();

class Bases extends Utility {

    get embedder() {
        return newEmbedder;
    }

    get markdown() {
        return newMarkdown;
    }

    get CronJob() {
        return cron;
    }

    sendMessage(message: Eris.Message, text: string) {
        return message.channel.createMessage({
            embed: {
                description: text,
                color: 0x54ff85
            }
        })
    }

    sendSuccess(message: Eris.Message, text: string, config: any) {
        return message.channel.createMessage({
            embed: {
                description: `${config.check} ${text}`,
                color: 0x54ff85
            }
        })
    }

    sendError(message: Eris.Message, text: string, config: any) {
        return message.channel.createMessage({
            embed: {
                description: `${config.deny} ${text}`,
                color: 0xff6554
            }
        })
    }

    /**
     * @param level The level color for the message. [true=red|false=green]
     * @returns 
     */
    async pinMessage(message: Eris.Message, text: string, level: boolean) {
        let colorLevel = level ? 0xff6554 : 0x54ff85;

        return await message.channel.createMessage({
            embed: {
                description: text,
                color: colorLevel
            }
        }).then(msg => msg.pin());
    }
}

export default Bases;