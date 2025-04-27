// prettier.config.cjs
module.exports = {
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    plugins: [require('prettier-plugin-tailwindcss')],
};
