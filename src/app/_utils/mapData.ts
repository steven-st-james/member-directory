import { PayloadType } from '../_types/payload.type'
import type { Member } from '../../generated/prisma/client'

export function mapPayloadToMember(payload: PayloadType): Omit<Member, 'id' | 'createdAt' | 'updatedAt'> {
    return {
        first: payload.name.first,
        last: payload.name.last,
        age: payload.dob.age,
        thumbImg: payload.picture.thumbnail,
        largeImg: payload.picture.large,
        street: `${payload.location.street.number} ${payload.location.street.name}`,
        city: payload.location.city,
        state: payload.location.state,
        postalCode: parseInt(payload.location.postcode.toString(), 10),
        dob: payload.dob.date,
        phoneNumber: payload.phone
    }
} 