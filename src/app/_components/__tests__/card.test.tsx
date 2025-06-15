import { render, screen, fireEvent } from '@testing-library/react'
import Card from '../card'
import { CardType } from '../../_types/card.types'
import { mockRouter } from './mocks/next-router'

const mockMember: CardType = {
    id: '1',
    first: 'John',
    last: 'Doe',
    age: 30,
    img: '/thumb1.jpg',
}

describe('Card Component', () => {
    beforeEach(() => {
        mockRouter.push.mockClear()
    })

    it('renders member information correctly', () => {
        render(<Card {...mockMember} />)
        
        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.getByText('Age:30')).toBeInTheDocument()
    })

    it('renders member image with correct alt text', () => {
        render(<Card {...mockMember} />)
        
        const image = screen.getByAltText('Card Image')
        expect(image).toBeInTheDocument()
        expect(image.getAttribute('src')).toContain('url=%2Fthumb1.jpg')
    })

    it('navigates to member page when clicked', () => {
        render(<Card {...mockMember} />)
        
        const card = screen.getByText('John Doe').closest('div')
        fireEvent.click(card!)
        
        expect(mockRouter.push).toHaveBeenCalledWith('/1')
    })
}) 