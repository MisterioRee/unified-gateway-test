
//method to convert date time to local-date time and format
export function toLocaleDateString(dateTime) {
    let date = new Date(dateTime) || Date.now();
    return date.toLocaleDateString();
}