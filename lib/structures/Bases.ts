import Eris from "eris";
import fetch from 'node-fetch';

class Bases {
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

    checkUserPermissions(message: Eris.Message, permissions: string[]) {
        for (let p of permissions) {
            message.member?.permissions.has(p);
        }
    }

    checkClientPermissions(message: Eris.Message, permissions: string[], clientID: string) {
        for (let p of permissions) {
            message.member?.guild.members.get(clientID)?.permissions.has(p);
        }
    }
    
    /**
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
    async _fetch(link: string, type: boolean): Promise<Function> {

        let res = await fetch(link);

        let fetchType = type ? res.text() : res.json();
        let j = fetchType;
        return j;
    }
}

export default Bases;