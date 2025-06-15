import { mapPayloadToMember } from '../../_utils/mapData'
import { Member } from '../../../generated/prisma'
import { PayloadType } from '../../_types/payload.type'

describe('mapData Utility', () => {
    it('correctly maps payload to member', () => {
        const mockPayload: PayloadType = {
            name: {
                first: 'John',
                last: 'Doe',
                title: 'Mr',
            },
            dob: {
                age: 30,
                date: '1993-01-01',
            },
            picture: {
                thumbnail: 'thumb1.jpg',
                large: 'large1.jpg',
                medium: 'medium1.jpg',
            },
            location: {
                street: {
                    number: 123,
                    name: 'Main St',
                },
                city: 'Boston',
                state: 'MA',
                postcode: 12345,
                country: 'USA',
                coordinates: {
                    latitude: '42.3601',
                    longitued: '-71.0589',
                },
                timezone: {
                    offset: '-5:00',
                    description: 'Eastern Time',
                },
            },
            email: 'john@example.com',
            phone: '123-456-7890',
            cell: '098-765-4321',
            gender: 'male',
            id: {
                name: 'SSN',
                value: '123-45-6789',
            },
            login: {
                md5: 'md5hash',
                password: 'password123',
                salt: 'salt123',
                shal: 'shalhash',
                sha256: 'sha256hash',
                username: 'johndoe',
                uuid: 'uuid123',
            },
            nat: 'US',
            registerd: {
                age: 2,
                date: '2022-01-01',
            },
        }

        const result = mapPayloadToMember(mockPayload)
        
        expect(result).toEqual({
            first: 'John',
            last: 'Doe',
            age: 30,
            thumbImg: 'thumb1.jpg',
            largeImg: 'large1.jpg',
            street: '123 Main St',
            city: 'Boston',
            state: 'MA',
            postalCode: 12345,
            dob: '1993-01-01',
            phoneNumber: '123-456-7890',
            email: 'john@example.com',
        })
    })
}) 