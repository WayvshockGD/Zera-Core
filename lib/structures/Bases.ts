import Eris from "eris";
import Utility from "../utility/Utility";

class Bases extends Utility {
    sendMessage(message: Eris.Message, text: string) {
        return message.channel.createMessage({
            embed: {
                description: text,
                color: 0x54ff85
            }
        })
    }

    sendError(message: Eris.Message, text: string) {
        return message.channel.createMessage({
            embed: {
                description: text,
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
