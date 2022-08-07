import { useCallback, useState } from 'react'

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.warn(error)
            return initialValue
        }
    })

    const setValue = useCallback(
        (value: T) => {
            try {
                const newValue =
                    value instanceof Function ? value(storedValue) : value

                window.localStorage.setItem(key, JSON.stringify(value))
                setStoredValue(newValue)
            } catch (error) {
                console.warn(error)
            }
        },
        [key, setStoredValue, storedValue]
    )

    return [storedValue, setValue]
}
