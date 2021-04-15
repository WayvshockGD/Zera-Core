export default interface ICommand {
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
}
