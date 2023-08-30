import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

const Header = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 4rem 0;
    z-index: 10;
`

const HeaderWrapper = styled(FlexContainer)`
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;

        ${FlexContainer} {
            gap: 1rem;
        }
    }
`

export const S = {
    Header,
    HeaderWrapper,
}
