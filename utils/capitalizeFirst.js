export const capitalizeFirst = (word) => {
    if (!word) return "";
    let al = word.slice(1, word.length);
    return word.charAt(0).toUpperCase() + al;
};
