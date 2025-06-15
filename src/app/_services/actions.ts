'use server'

export default async function getMemberIdAction(id: string) {
    console.log('ID', id)
    return id;
}