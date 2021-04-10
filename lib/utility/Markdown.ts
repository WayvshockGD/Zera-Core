class Markdown {

    spoiler(args: string|string[]) {
        return `||${args}||`;
    }

    codeBlock(args: string|string[], language: string) {
        return `\`\`\`${language}\n${args}\n\`\`\``;
    }

    underline(args: string|string[]) {
        return `__${args}__`;
    }

    bold(args: string|string[]) {
        return `**${args}**`;
    }

    strikeThrough(args: string|string[]) {
        return `~~${args}~~`;
    }
}

export default Markdown;