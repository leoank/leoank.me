import React from 'react'

import { RootContext } from '../main'

import { useStore } from '../store'

export type RootContextProviderPropertiesType = {
    children: React.ReactNode
}

const RootContextProvider = (
    properties: RootContextProviderPropertiesType
): JSX.Element => {
    const { children } = properties
    const store = useStore()

    return <RootContext.Provider value={store}>{children}</RootContext.Provider>
}

export { RootContextProvider }
