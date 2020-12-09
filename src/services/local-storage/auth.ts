import { getValueFromLocalStorage, setValueToLocalStorage } from './common'

export const LOCAL_STORAGE_AUTH_KEY = 'AUTH'

export const getAuthStateFromLocalStorage = (): string | null | boolean => {
    return getValueFromLocalStorage(LOCAL_STORAGE_AUTH_KEY)
}

export const setAuthStateToLocalStorage = (state: boolean): void => {
    setValueToLocalStorage(LOCAL_STORAGE_AUTH_KEY, state)
}
