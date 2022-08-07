import { useCallback } from 'react'
import {
    useSignIn,
    SignInSuccessResponse,
    SignInErrorResponse,
} from '../services'
import { useLocalStorage } from './useLocalStorage'

export function useAuth() {
    const [user, setUser] = useLocalStorage<SignInSuccessResponse>('user', {
        auth: false,
        authToken: '',
        refreshToken: '',
        id: 0,
        firstName: '',
        lastName: '',
    })

    const successCallback = useCallback(
        (data: SignInSuccessResponse) => {
            setUser(data)
        },
        [setUser]
    )

    const errorCallback = (error: SignInErrorResponse) => {}

    const { signIn, isLoading, isError } = useSignIn({
        successCallback,
        errorCallback,
    })

    return { user, signIn, isLoading, isError }
}
