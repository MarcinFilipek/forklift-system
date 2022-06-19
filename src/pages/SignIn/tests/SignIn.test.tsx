import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SignIn } from '../SignIn'

describe('<SignIn />', () => {
    const handleSubmit = jest.fn()
    const props = {
        loginText: 'Login',
        passwordText: 'Password',
        buttonText: 'Sign in',
        handleSubmit,
    }
    test('render inputs', () => {
        render(<SignIn {...props} />)
        expect(screen.getByTestId('login-input')).toBeInTheDocument()
        expect(screen.getByTestId('password-input')).toBeInTheDocument()
    })
    test('render submit button and run submit function', async () => {
        render(<SignIn {...props} />)
        const button = screen.getByText(props.buttonText, {
            selector: 'button',
        })

        expect(button).toBeInTheDocument()
        fireEvent.submit(button)

        await waitFor(() => {
            expect(handleSubmit).toBeCalled()
        })
    })
})
