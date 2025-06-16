export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', {month: 'long'})
    const day = String(date.getDate());

    return `${month} ${day}, ${year}`;
}