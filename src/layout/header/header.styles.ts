import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

export const StyledHeader = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 4rem 0;
    z-index: 10;
`

export const HeaderWrapper = styled(FlexContainer)`
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;

        ${FlexContainer} {
            gap: 1rem;
        }
    }
`
