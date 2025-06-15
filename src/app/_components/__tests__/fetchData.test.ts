import { fetchData } from '../../_services/fetch-data'
import { prisma } from '../../_lib/prisma'
import { PayloadType } from '../../_types/payload.type'

// Mock the prisma client
jest.mock('../../_lib/prisma', () => ({
    prisma: {
        member: {
            findMany: jest.fn(),
            create: jest.fn(),
        },
    },
}))

describe('fetchData Utility', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('returns existing members from database', async () => {
        const mockMembers = [
            {
                id: '1',
                first: 'John',
                last: 'Doe',
                age: 30,
                thumbImg: '/thumb1.jpg',
                largeImg: '/large1.jpg',
                street: '123 Main St',
                city: 'Boston',
                state: 'MA',
                postalCode: 12345,
                dob: '1993-01-01',
                phoneNumber: '123-456-7890',
                email: 'john@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        ;(prisma.member.findMany as jest.Mock).mockResolvedValue(mockMembers)

        const result = await fetchData()
        expect(result).toEqual({ results: mockMembers })
        expect(prisma.member.findMany).toHaveBeenCalledWith({
            orderBy: { createdAt: 'desc' }
        })
        expect(prisma.member.create).not.toHaveBeenCalled()
    })
}) 