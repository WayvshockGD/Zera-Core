import Eris from "eris";
import ICommand from "../../interfaces/ICommand";
import Bases from "./Bases";
declare class Command extends Bases implements ICommand {
    name: string;
    description: string;
    category: string;
    aliases: string[];
    examples: string[];
    clientPermissions: string[];
    userPermissions: string[];
    subCommands: string[];
    ownerOnly: boolean;
    hidden: boolean;
    disabled: boolean;
    cooldown: number;
    expectedArgs: number;
    constructor(command: any);
    execute(client: Eris.Client, message: Eris.Message, args: string[]): void;
}
export default Command;
