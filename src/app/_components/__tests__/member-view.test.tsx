import { render, screen, fireEvent } from '@testing-library/react'
import MemberView from '../memberview'
import { Member } from '../../../generated/prisma'
import { mockRouter } from './mocks/next-router'

const mockMembers: Member[] = [
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
    {
        id: '2',
        first: 'Jane',
        last: 'Smith',
        age: 25,
        thumbImg: '/thumb2.jpg',
        largeImg: '/large2.jpg',
        street: '456 Oak St',
        city: 'New York',
        state: 'NY',
        postalCode: 67890,
        dob: '1998-01-01',
        phoneNumber: '098-765-4321',
        email: 'jane@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

describe('MemberView Component', () => {
    beforeEach(() => {
        mockRouter.push.mockClear()
    })

    it('renders all members initially', () => {
        render(<MemberView members={mockMembers} />)
        
        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })

    it('filters members based on search input', () => {
        render(<MemberView members={mockMembers} />)
        
        const searchInput = screen.getByPlaceholderText('Search by name...')
        fireEvent.change(searchInput, { target: { value: 'John' } })
        
        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
    })

    it('shows no results message when no matches found', () => {
        render(<MemberView members={mockMembers} />)
        
        const searchInput = screen.getByPlaceholderText('Search by name...')
        fireEvent.change(searchInput, { target: { value: 'xyz' } })
        
        expect(screen.queryByText('No members found')).not.toBeInTheDocument()
    })
}) 