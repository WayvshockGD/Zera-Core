import Eris from "eris";
declare class Bases {
    sendMessage(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    sendError(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    /**
     * @param level The level color for the message. [true=red|false=green]
     * @returns
     */
    pinMessage(message: Eris.Message, text: string, level: boolean): Promise<void>;
    checkUserPermissions(message: Eris.Message, permissions: string[]): void;
    checkClientPermissions(message: Eris.Message, permissions: string[], clientID: string): void;
    /**
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
    _fetch(link: string, type: boolean): Promise<Function>;
}
export default Bases;
