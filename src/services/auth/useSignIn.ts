import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { SignInErrorResponse, SignInSuccessResponse } from './types'

type Params = {
    login: string
    password: string
}

const signIn = async ({ login, password }: Params) => {
    const { data: response } = await axios.post('/api/sign-in', {
        login,
        password,
    })
    return response
}

type Props = {
    successCallback: (value: SignInSuccessResponse) => void
    errorCallback: (value: SignInErrorResponse) => void
}

export const useSignIn = ({ successCallback, errorCallback }: Props) => {
    const { mutate, isLoading, isError } = useMutation<
        SignInSuccessResponse,
        SignInErrorResponse,
        Params
    >(signIn, {
        onSuccess: (data) => {
            successCallback && successCallback(data)
        },
        onError: (error) => {
            errorCallback && errorCallback(error)
        },
    })
    return { signIn: mutate, isLoading, isError }
}
