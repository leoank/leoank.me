const { localStorage } = window

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setValueToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, value)
}

export const getValueFromLocalStorage = (
    key: string
): string | boolean | null => {
    const val = localStorage.getItem(key)

    if (val === 'false' || val === 'true') {
        // Since boolean value are stored as string in local storage
        // So explicitly converting it to boolean.
        // This return true if val === 'true' else false
        return val === 'true'
    }
    return val
}
