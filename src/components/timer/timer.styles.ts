import styled from 'styled-components'

export const StyledTimer = styled.div`
    & > span {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.grey};
    }
`

export const TimerItem = styled.div`
    min-width: 5.5rem;
    text-align: center;

    & > div {
        font-size: 4rem;
        font-weight: 700;
        color: ${props => props.theme.colors.sea};
    }

    & > span {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.grey};
    }
`
