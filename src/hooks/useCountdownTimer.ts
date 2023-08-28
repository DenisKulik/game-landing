import { useState, useEffect } from 'react'

export const useCountdownTimer = (initialTime: number) => {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime(prevTime => {
                if (prevTime === 0) {
                    clearInterval(countdown)
                    return 0
                } else {
                    return prevTime - 1
                }
            })
        }, 1000)

        return () => {
            clearInterval(countdown)
        }
    }, [])

    return time
}
