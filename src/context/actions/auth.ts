import React from 'react'

import { USER_AUTHORIZED, USER_DE_AUTHORIZED } from '../constants/auth'
import { authReducer, authReducerInitialState } from '../reducers/auth'

export type UseAuthFunctionType = {
    authState: any
    authorizeUser: () => void
    deAuthorizeUser: () => void
}

export const useAuth = (): UseAuthFunctionType => {
    const [authState, dispatch] = React.useReducer(
        authReducer,
        authReducerInitialState
    )

    const authorizeUser = () => dispatch({ type: USER_AUTHORIZED })

    const deAuthorizeUser = () => dispatch({ type: USER_DE_AUTHORIZED })

    return {
        authState,
        authorizeUser,
        deAuthorizeUser,
    }
}
