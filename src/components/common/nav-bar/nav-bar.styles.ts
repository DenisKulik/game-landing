import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    gap: 3rem;

    ul {
        display: flex;
        gap: 3rem;
        list-style: none;
    }

    ul > li > a {
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`

export const LanguageBlock = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    & > div {
        visibility: hidden;
        position: absolute;
    }
`
