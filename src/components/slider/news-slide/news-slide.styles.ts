import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

export const StyledNewsSlide = styled.div`
    max-width: 61.5rem;
    padding: 2rem;
    border-radius: 6px;
    background-color: #141615;
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkgrey};
    }
`

export const NewsInfo = styled(FlexContainer)``

export const NewsTitle = styled.h3`
    margin-bottom: 1.6rem;
    font-size: 1.9rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const GameName = styled.span`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
`

export const Date = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.grey};
`

export const NewsDescr = styled.p`
    max-width: 25.6rem;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.grey};
`

export const NewsImage = styled.img``
