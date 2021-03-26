import Eris from "eris";
declare class Utility {
    _pinMessage(message: Eris.Message): void;
    _unPinMessage(message: Eris.Message): void;
    _react(message: Eris.Message, client: Eris.Client, emoji: string): void;
    /**
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
    _fetch(link: string, type: boolean): Promise<Function>;
}
export default Utility;
