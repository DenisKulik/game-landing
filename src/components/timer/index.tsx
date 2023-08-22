import { StyledTimer, TimerItem } from 'components/timer/timer.styles.ts'
import { FlexContainer } from 'components/common/flex-container'

export const Timer = () => {
    return (
        <StyledTimer as={FlexContainer} align="center" gap="1.9rem">
            <span>Release</span>

            <FlexContainer justify="space-between" gap="0.5rem">
                <TimerItem>
                    <div>0</div>
                    <span>D</span>
                </TimerItem>
                <TimerItem>
                    <div>0</div>
                    <span>H</span>
                </TimerItem>
                <TimerItem>
                    <div>0</div>
                    <span>M</span>
                </TimerItem>
            </FlexContainer>
        </StyledTimer>
    )
}
