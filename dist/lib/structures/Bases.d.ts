import Eris from "eris";
declare class Bases {
    sendMessage(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    sendError(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    /**
     * @param link The link that the fetcher that will fetch.
     * @param type Types: [false=json|true=text]
     */
    _fetcher(link: string, type: boolean): Promise<any>;
}
export default Bases;
