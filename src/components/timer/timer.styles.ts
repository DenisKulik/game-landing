import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

const Timer = styled(FlexContainer)`
    & > span {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.grey};
    }

    @media ${({ theme }) => theme.media.medium} {
        align-self: center;
        flex-direction: column;
    }
`

const TimerItem = styled.div`
    min-width: 5.5rem;
    text-align: center;

    & > div {
        font-size: 4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.sea};
    }

    & > span {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.grey};
    }
`

export const S = {
    Timer,
    TimerItem,
}
