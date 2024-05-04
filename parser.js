import { tokenTypes } from "./tokens.js";

export function parser(tokens) {
    let current = 0;

    function parseExpression() {
        let expr = [];

        while (current < tokens.length) {
            let token = tokens[current];

            if (token.type === tokenTypes.WORD.name || token.type === tokenTypes.STRING.name) {
                expr.push(token);
                current++;
            } else if (token.type === tokenTypes.PUNCTUATION.name) {
                if(token.value === tokenTypes.PUNCTUATION.openTag) {
                    current++;
                    let nestedExpr = parseExpression();
                    expr[expr.length - 1].children = nestedExpr;
                }

                if(token.value === tokenTypes.PUNCTUATION.closeTag) {
                    current++;
                    return expr;
                }                
            } else {
                current++;
            }
        }

        return expr;
    }

    return parseExpression();
}