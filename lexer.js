import { tokenTypes } from "./tokens.js";

export function lexer(expression) {
    const tokens = [];
    let current = 0;

    while (current < expression.length) {
        let char = expression[current];

        if (char === tokenTypes.PUNCTUATION.openTag || char === tokenTypes.PUNCTUATION.closeTag) {
            tokens.push({ type: tokenTypes.PUNCTUATION.name, value: char });
            current++;
        } else if (char === tokenTypes.STRING.openTag) {
            let value = '';
            current++;
            while (expression[current] !== tokenTypes.STRING.closeTag) {
                value += expression[current];
                current++;
            }
            tokens.push({ type: tokenTypes.STRING.name, value: value });
            current++;
        } else if (tokenTypes.WORD.chars.test(char)) {
            let value = '';
            while (tokenTypes.WORD.chars.test(expression[current])) {
                value += expression[current];
                current++;
            }
            tokens.push({ type: tokenTypes.WORD.name, value: value });
        } else {
            current++;
        }
    }

    return tokens;
}