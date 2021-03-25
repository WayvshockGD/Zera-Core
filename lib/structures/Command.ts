import Eris from "eris";
import ICommand from "../../interfaces/ICommand";
import Bases from "./Bases";

class Command extends Bases implements ICommand {
    name: string;
    description: string;
    category: string;

    aliases: string[]
    examples: string[];
    subCommands: string[];
    clientPermissions: string[];
    userPermissions: string[];

    ownerOnly: boolean;
    hidden: boolean;
    disabled: boolean;

    cooldown: number;
    expectedArgs: number

    constructor(command: any) {
        super();

        this.name = command || '';
        this.description = command || '';
        this.category = command || '';

        this.aliases = command || [];
        this.examples = command || [];
        this.subCommands = command || [];
        this.clientPermissions = command || [];
        this.userPermissions = command || [];

        this.ownerOnly = command || false;
        this.hidden = command || false
        this.disabled = command || false;
        
        this.cooldown = command || 0;
        this.expectedArgs = command || 0;
    }

    public execute(client: Eris.Client, message: Eris.Message, args: string[]) { }
}

export default Command;