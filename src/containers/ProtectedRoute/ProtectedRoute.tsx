import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks'

type Props = {
    redirectPath?: string | undefined
    children: React.ReactNode
}

export const ProtectedRoute = ({
    redirectPath = '/sign-in',
    children,
}: Props) => {
    const { user } = useAuth()

    if (!user.auth) {
        return <Navigate to={redirectPath} replace />
    }

    return <React.Fragment>{children}</React.Fragment>
}
