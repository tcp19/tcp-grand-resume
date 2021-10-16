export function formatDate(date) {
    if (!date) {
        return "";
    }
    const options = {
        // weekday: 'long',
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
}
