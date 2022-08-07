export type SignInSuccessResponse = {
    auth: boolean
    authToken: string
    refreshToken: string
    id: number
    firstName: string
    lastName: string
}

export type SignInErrorResponse = {
    auth: boolean
    error: string
}
