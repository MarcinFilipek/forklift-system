import { render, screen } from '@testing-library/react'
import { SignIn } from '../SignIn'

describe('<SignIn />', () => {
    test('render sign in paragraph', () => {
        render(<SignIn />)
        expect(screen.getByText('SignIn')).toBeInTheDocument()
    })
})
