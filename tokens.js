export const tokenTypeNames = {
    PUNCTUATION: 'PUNCTUATION',
    STRING: 'STRING',
    WORD: 'WORD',
};

export const tokenTypes = {
    [tokenTypeNames['PUNCTUATION']]: { name: tokenTypeNames['PUNCTUATION'], isTag: true, openTag: '(', closeTag: ')' },
    [tokenTypeNames['STRING']]: { name: tokenTypeNames['STRING'], isTag: true, openTag: '"', closeTag: '"' },
    [tokenTypeNames['WORD']]: { name: tokenTypeNames['WORD'], isTag: false, chars: /[a-zA-Z_]/ },
};