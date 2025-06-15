import { prisma } from '../_lib/prisma'
import type { Member } from '../../generated/prisma/client'

export async function fetchData() {
    const members = await prisma.member.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return { results: members };
}