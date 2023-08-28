import { StyledTimer, TimerItem } from 'components/timer/timer.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { useCountdownTimer } from 'hooks'

type Props = {
    initialTime: number
}

export const Timer = ({ initialTime }: Props) => {
    const remainingTime = useCountdownTimer(initialTime)

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return { hours, minutes, secs }
    }

    const { hours, minutes, secs } = formatTime(remainingTime)

    return (
        <StyledTimer align="center" gap="1.9rem">
            <span>Release</span>

            <FlexContainer justify="space-between" gap="0.5rem">
                <TimerItem>
                    <div>{hours}</div>
                    <span>H</span>
                </TimerItem>
                <TimerItem>
                    <div>{minutes}</div>
                    <span>M</span>
                </TimerItem>
                <TimerItem>
                    <div>{secs}</div>
                    <span>S</span>
                </TimerItem>
            </FlexContainer>
        </StyledTimer>
    )
}
