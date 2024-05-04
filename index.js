import { lexer } from "./lexer.js";
import { parser } from "./parser.js";
import { toRegex } from "./toRegex.js";

const expression = `
STARTS_WITH(
    GROUP("http" OR "https")
)
CONTAINS("://")
ANY
ENDS_WITH(".com")
`;
const tokens = lexer(expression);
const nestedTokens = parser(tokens);
console.log("Query:", expression);
console.log("Tokens:", tokens);
console.log("Nested Tokens:", nestedTokens);
const regexString = toRegex(nestedTokens);
console.log("Regex:", regexString);