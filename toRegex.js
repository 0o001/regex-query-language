import { tokenTypes } from "./tokens.js";
import { wordTypes } from "./words.js";

export function toRegex(parsedTokens) {
    let regex = '';

    for (let i = 0; i < parsedTokens.length; i++) {
        const token = parsedTokens[i];
        
        if (token.type === tokenTypes.WORD.name) {
            if(!Object.keys(wordTypes).includes(token.value)) {
                throw new Error("Error: " + token.value);
            }

            for (const word of Object.values(wordTypes)) {
                if(token.value === word.name && !word?.prepend) {
                    regex += word.value || word.openTag || '';
                }
            }
        } else if (token.type === tokenTypes.STRING.name) {
            regex += token.value.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&");
        } else if (token.type === tokenTypes.PUNCTUATION.name) {
            if (token.value === tokenTypes.PUNCTUATION.openTag) {
                regex += tokenTypes.PUNCTUATION.openTag;
            } else if (token.value === tokenTypes.PUNCTUATION.closeTag) {
                regex += tokenTypes.PUNCTUATION.closeTag;
            } else {
                throw new Error("Error: " + token.value);
            }
        }

        if (token.children) {
            const prependWord = Object.values(wordTypes).find(word => token.value === word.name && word?.prepend);
            
            if(prependWord) {
                regex += toRegex(token.children) + (prependWord.value || prependWord.openTag || '');
            } else {
                regex += toRegex(token.children);
            }
        }
    }

    if (parsedTokens[0].value === wordTypes.GROUP.name) {
        regex += wordTypes.GROUP.closeTag;
    }

    return regex;
}