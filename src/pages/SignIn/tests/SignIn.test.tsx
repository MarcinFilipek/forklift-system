import { render, screen } from '@testing-library/react'
import { SignIn } from '../SignIn'

describe('<SignIn />', () => {
    test('render inputs', () => {
        render(<SignIn />)
        expect(screen.getByTestId('login-input')).toBeInTheDocument()
        expect(screen.getByTestId('password-input')).toBeInTheDocument()
    })
    test('render submit button', () => {
        render(<SignIn />)
        expect(
            screen.getByText('Sign in', { selector: 'button' })
        ).toBeInTheDocument()
    })
})
