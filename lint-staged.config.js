module.exports = {
    // Run ESLint on changes to JavaScript/TypeScript files
    '**/*.(ts|js)?(x)': (filenames) => `npm lint . ${filenames.join(' ')}`,
}