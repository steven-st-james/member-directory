export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', {month: 'long'})
    const day = String(date.getDate()).padStart(2, '0');

    return `${month} ${day}, ${year}`;
}