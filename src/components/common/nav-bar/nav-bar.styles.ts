import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    gap: 3rem;
`

export const List = styled.ul`
    display: flex;
    gap: 3rem;
    list-style: none;
`

export const NavItem = styled.li``

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white};
`

export const LanguageBlock = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const LanguageSelect = styled.div`
    visibility: hidden;
    position: absolute;
`
