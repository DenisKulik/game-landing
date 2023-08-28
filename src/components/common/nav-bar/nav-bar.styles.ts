import styled from 'styled-components'

type StyledNavProps = {
    visible?: string
}

export const StyledNav = styled.nav<StyledNavProps>`
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    transform: translateX(${({ visible }) => (visible ? '0' : -1000)}px);
    transition: all 0.25s ease-in-out;
`

export const LinkList = styled.ul`
    list-style: none;
    text-transform: uppercase;
`

export const StyledLink = styled.a`
    text-decoration: none;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`
