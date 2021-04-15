import ICommand from "../../interfaces/ICommand";
import Bases from "./Bases";
declare class Command extends Bases implements ICommand {
    name: string;
    description: string;
    category: string;
    module: string;
    aliases: string[];
    examples: string[];
    subCommands: string[];
    clientPermissions: string[];
    userPermissions: string[];
    ownerOnly: boolean;
    hidden: boolean;
    disabled: boolean;
    cooldown: number;
    expectedArgs: number;
    constructor(command: any);
    execute(): void;
}
export default Command;
