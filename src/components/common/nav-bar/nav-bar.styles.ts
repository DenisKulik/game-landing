import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    isOpened: boolean
}

export const StyledNav = styled.nav<Props>`
    visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
    transform: translateX(${props => (props.isOpened ? '0' : '-1000px')});
    transition: all 0.25s ease-in-out;
`

export const LinkList = styled.ul`
    list-style: none;
    text-transform: uppercase;
`

export const StyledLink = styled.a`
    text-decoration: none;
    opacity: 0.5;
    color: ${props => props.theme.colors.white};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export const ArrowDown = styled(RiArrowDownSLine)`
    transform: rotate(0deg);
    transition: transform 0.25s ease-in-out;
`

export const LanguagesList = styled.div`
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.darkgrey};
`

export const LanguagesWrapper = styled(FlexContainer)`
    position: relative;
    cursor: pointer;

    &:hover {
        ${LanguagesList} {
            visibility: visible;
        }

        ${ArrowDown} {
            transform: rotate(180deg);
        }
    }
`

export const CurrentLanguage = styled.span`
    font-weight: 700;
    text-transform: uppercase;
`

export const LanguageItem = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.5;

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`
