import React from 'react'
import { RootContext, StoreContextType } from '../main'
import { useAuth, UseAuthFunctionType } from '../actions/auth'
import { styleData, StyleDataType } from '../style'

const store = () => React.useContext(RootContext)

export const useAuthStore = (): UseAuthFunctionType | undefined => {
    return store().authStore
}

export const useStyleStore = (): StyleDataType => store().styleData

export const useStore = (): StoreContextType => {
    const authStore = useAuth()

    return {
        authStore,
        styleData,
    }
}
