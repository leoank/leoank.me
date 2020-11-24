import React from 'react'

import { UseAuthFunctionType } from './actions/auth'
import { styleData, StyleDataType } from './style'

export type StoreContextType = {
    authStore?: UseAuthFunctionType
    styleData: StyleDataType
}

const RootContext = React.createContext<StoreContextType>({ styleData })

export { RootContext }
