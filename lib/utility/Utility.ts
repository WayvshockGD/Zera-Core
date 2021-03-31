import Eris from "eris";
import fetch from 'node-fetch';

class Utility {

    public _pinMessage(message: Eris.Message) {
        try {
            message.pin().catch(() => {
                return null;
            })
        } catch (error) {
            console.error(error);
        //    return message.channel.createMessage({
        //        embed: {
        //            description: 'Unable to pin message.',
        //            color: 0xff6554
        //        },
        //    })
        }
    }

    public _unPinMessage(message: Eris.Message) {
        try {
            message.unpin().catch(() => {
                return null;
            })
        } catch (error) {
            console.error(error);
         //   return message.channel.createMessage({
         //       embed: {
         //           description: 'Unable to unpin message.',
         //           color: 0xff6554
         //       },
         //   })
        }
    }

    public _react(message: Eris.Message, client: Eris.Client, emoji: string) {
        try {
            client.addMessageReaction(message.channel.id, message.id, emoji).catch(() => {
                return null;
            })
        } catch (error) {
            console.error(error);
        }
    }
    /**
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
         async _fetch(link: string, type: boolean): Promise<Function> {

            let res = await fetch(link);

            let fetchType = type ? await res.text() : await res.json();
            return fetchType;
        }
}

export default Utility;