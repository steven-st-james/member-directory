import { prisma } from '../_lib/prisma'
import { mapPayloadToMember } from '../_utils/mapData'

export async function seedMembers() {
    const count = await prisma.member.count();
    if (count > 0) return;

    const response = await fetch('https://randomuser.me/api/?results=15&nat=US', { cache: 'no-store' });
    const data = await response.json();
    await Promise.all(
        data.results.map(async (payload: any) => {
            const memberData = mapPayloadToMember(payload);
            await prisma.member.create({ data: memberData });
        })
    );
} 