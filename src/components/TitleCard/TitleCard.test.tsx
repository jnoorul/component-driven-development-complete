import { render, screen } from '@testing-library/react'
import { TitleCard } from './TitleCard'

describe('TitleCard', () => {
    it('should display title card with title', () => {
        const eventTitle =
            'Component Driven (UI) Development using React, Storybook'
        render(<TitleCard />)
        expect(
            screen.getByRole('heading', { name: eventTitle })
        ).toBeInTheDocument()
    })
    it('should display date of the event', () => {
        render(<TitleCard />)
        expect(
            screen.getByText('Tuesday, September 27, 2022')
        ).toBeInTheDocument()
    })
})
