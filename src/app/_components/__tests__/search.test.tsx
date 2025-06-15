import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../search'

describe('Search Component', () => {
    it('renders search input', () => {
        const mockOnSearch = jest.fn()
        render(<Search onSearch={mockOnSearch} />)
        
        const searchInput = screen.getByPlaceholderText('Search by name...')
        expect(searchInput).toBeInTheDocument()
    })

    it('calls onSearch when input changes', () => {
        const mockOnSearch = jest.fn()
        render(<Search onSearch={mockOnSearch} />)
        
        const searchInput = screen.getByPlaceholderText('Search by name...')
        fireEvent.change(searchInput, { target: { value: 'John' } })
        
        expect(mockOnSearch).toHaveBeenCalledWith('John')
    })
}) 