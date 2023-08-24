import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

export const StyledNewsSlide = styled.div`
    max-width: 61.5rem;
    padding: 2rem;
    border-radius: 6px;
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.darkgrey} 22.4%,
        #141615 100%
    );
`

export const NewsInfo = styled(FlexContainer)``
