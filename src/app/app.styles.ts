import styled from 'styled-components'

const App = styled.div`
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background};
`

export const S = {
    App,
}
