import styled from 'styled-components'

const GoTopBtn = styled.button`
    position: fixed;
    padding: 0.8rem 1.6rem;
    right: 3rem;
    bottom: 3rem;
    font-size: 2.2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
        opacity: 0.8;
    }
`

export const S = { GoTopBtn }
