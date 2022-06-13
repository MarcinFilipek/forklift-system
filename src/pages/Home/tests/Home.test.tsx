import { render, screen } from '@testing-library/react'
import { Home } from '../Home'

describe('<Home />', () => {
    test('render home paragraph', () => {
        render(<Home />)
        expect(screen.getByText('Home')).toBeInTheDocument()
    })
})
