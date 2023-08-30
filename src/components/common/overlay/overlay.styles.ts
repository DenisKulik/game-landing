import styled from 'styled-components'

type StyledOverlayProps = {
    active?: string
}

const Overlay = styled.div<StyledOverlayProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    opacity: 0.7;
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.15s ease-in-out;
`

export const S = {
    Overlay,
}
