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
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
    async _fetcher(link: string, type: boolean) {

        let res = await fetch(link);

        let fetchType = type ? res.text() : res.json();
        let j = fetchType;
        return j;
    }
}

export default Bases;