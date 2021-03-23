export default interface ICommand {
    // Strings
    name: string;
    description: string;
    category: string;

    // Arrays
    aliases: string[];
    examples: string[];
    clientPermissions: string[];
    userPermissions: string[];
    subCommands: string[];

    // Booleans
    ownerOnly: boolean;
    hidden: boolean;
    disabled: boolean

    // Numbers
    cooldown: number;
    expectedArgs: number;
}