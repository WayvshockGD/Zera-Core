export default interface ICommand {
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
}
