import {
    getAuthStateFromLocalStorage,
    setAuthStateToLocalStorage,
} from '@services/local-storage/auth'

import { USER_AUTHORIZED, USER_DE_AUTHORIZED } from '../constants/auth'

export const authReducerInitialState = {
    auth: getAuthStateFromLocalStorage(),
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const authReducer = (state: any, action: any): any => {
    switch (action.type) {
        case USER_AUTHORIZED:
            setAuthStateToLocalStorage(true)
            state = { ...state, auth: true }
            return state

        case USER_DE_AUTHORIZED:
            setAuthStateToLocalStorage(false)
            state = { ...state, auth: false }
            return state

        default:
            throw new Error(
                `[AUTH REDUCER] Action type is not identified.
               [Type] ${action.type}`
            )
    }
}
