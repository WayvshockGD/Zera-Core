import Eris from "eris";
import Embedder from "../utility/Embedder";
import Markdown from '../utility/Markdown';
import Utility from "../utility/Utility";
import cron from '../utility/CronJobs';
declare class Bases extends Utility {
    get embedder(): Embedder;
    get markdown(): Markdown;
    get CronJob(): typeof cron;
    sendMessage(message: Eris.Message, text: string): Promise<Eris.Message<Eris.TextableChannel>>;
    sendSuccess(message: Eris.Message, text: string, config: any): Promise<Eris.Message<Eris.TextableChannel>>;
    sendError(message: Eris.Message, text: string, config: any): Promise<Eris.Message<Eris.TextableChannel>>;
    /**
     * @param level The level color for the message. [true=red|false=green]
     * @returns
     */
    pinMessage(message: Eris.Message, text: string, level: boolean): Promise<void>;
}
export default Bases;
