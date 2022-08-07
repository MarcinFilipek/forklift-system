import { useIntl } from 'react-intl'
import { SignIn } from './SignIn'
import { useAuth } from '../../hooks'

export const SignInAdapter = () => {
    const intl = useIntl()
    const { signIn } = useAuth()

    const loginText = intl.formatMessage({
        id: 'userName',
    })
    const passwordText = intl.formatMessage({
        id: 'password',
    })
    const buttonText = intl.formatMessage({
        id: 'signIn',
    })
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            login: { value: string }
            password: { value: string }
        }
        signIn({ login: target.login.value, password: target.password.value })
    }
    return (
        <SignIn
            buttonText={buttonText}
            loginText={loginText}
            passwordText={passwordText}
            handleSubmit={handleSubmit}
        />
    )
}
