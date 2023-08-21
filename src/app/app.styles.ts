import styled from 'styled-components'

export const AppWrapper = styled.div`
    min-height: 100vh; // for dev
    overflow-x: hidden;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.background};
`
