export const wordNames = {
    STARTS_WITH: 'STARTS_WITH',
    ENDS_WITH: 'ENDS_WITH',
    ANY: 'ANY',
    CONTAINS: 'CONTAINS',
    OR: 'OR',
    GROUP: 'GROUP'
};

export const wordTypes = {
    [wordNames['STARTS_WITH']]: { name: wordNames['STARTS_WITH'], isTag: false, value: '^' },
    [wordNames['ENDS_WITH']]: { name: wordNames['ENDS_WITH'], isTag: false, value: '$', prepend: true},
    [wordNames['ANY']]: { name: wordNames['ANY'], isTag: false, value: '.*' },
    [wordNames['CONTAINS']]: { name: wordNames['CONTAINS'], isTag: false, value: '' },
    [wordNames['OR']]: { name: wordNames['OR'], isTag: false, value: '|' },
    [wordNames['GROUP']]: { name: wordNames['GROUP'], isTag: true, openTag: '(', closeTag: ')' },
};