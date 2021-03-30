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

    sendSucess(message: Eris.Message, text: string, config: any) {
        return message.channel.createMessage({
            embed: {
                description: `${config.check} ${text}`,
                color: 0xff6554
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

    checkUserPermissions(message: Eris.Message, permissions: string[]) {
        for (let p of permissions) {
            message.member?.permissions.has(p);
        }
    }
}

export default Bases;