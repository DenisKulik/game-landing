import styled from 'styled-components'
import { Link } from 'react-scroll'

type StyledNavProps = {
    visible?: string
}

const Nav = styled.nav<StyledNavProps>`
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    transform: translateX(${({ visible }) => (visible ? '0' : -1000)}px);
    transition: all 0.25s ease-in-out;
`

const LinkList = styled.ul`
    list-style: none;
    text-transform: uppercase;
`

const NavLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const S = {
    Nav,
    LinkList,
    NavLink,
}
