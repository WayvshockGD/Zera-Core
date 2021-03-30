import Eris from "eris";
import Utility from "../utility/Utility";
declare class Bases extends Utility {
    sendMessage(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    sendSucess(message: Eris.Message, text: string, config: any): Promise<Eris.Message<Eris.TextableChannel>>;
    sendError(message: Eris.Message, text: string, config: any): Promise<Eris.Message<Eris.TextableChannel>>;
    /**
     * @param level The level color for the message. [true=red|false=green]
     * @returns
     */
    pinMessage(message: Eris.Message, text: string, level: boolean): Promise<void>;
    checkUserPermissions(message: Eris.Message, permissions: string[]): void;
}
export default Bases;
