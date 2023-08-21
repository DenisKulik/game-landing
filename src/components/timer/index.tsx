import { StyledTimer, TimerInner, TimerItem } from 'components/timer/timer.styles.ts'

export const Timer = () => {
    return (
        <StyledTimer>
            <span>Release</span>

            <TimerInner>
                <TimerItem>
                    <div>0</div>
                    <div>D</div>
                </TimerItem>
                <TimerItem>
                    <div>0</div>
                    <div>H</div>
                </TimerItem>
                <TimerItem>
                    <div>0</div>
                    <div>M</div>
                </TimerItem>
            </TimerInner>
        </StyledTimer>
    )
}
