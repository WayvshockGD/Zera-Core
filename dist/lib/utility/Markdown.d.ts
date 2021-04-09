declare class Markdown {
    spoiler(args: string | string[]): string;
    codeBlock(args: string | string[], language: string): string;
    underline(args: string | string[]): string;
    bold(args: string | string[]): string;
    strikeThrough(args: string | string[]): string;
}
declare const _default: Markdown;
export default _default;
