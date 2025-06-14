export async function fetchData() {
    const data = await fetch('https://randomuser.me/api/?results=15&nat=US', { cache: 'force-cache' });
    return await data.json();

}