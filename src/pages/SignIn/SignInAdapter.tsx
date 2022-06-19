import { useIntl } from 'react-intl'
import { SignIn } from './SignIn'

export const SignInAdapter = () => {
    const intl = useIntl()
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
        console.log(target.login, target.password)
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
