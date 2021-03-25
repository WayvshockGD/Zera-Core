export default interface ICommand {
    // Strings
    name: string;
    description: string;
    category: string;

    // Arrays
    aliases: string[];
    examples: string[];
    subCommands: string[];
    clientPermissions: string[];
    userPermissions: string[];

    // Booleans
    ownerOnly: boolean;
    hidden: boolean;
    disabled: boolean

    // Numbers
    cooldown: number;
    expectedArgs: number;
}