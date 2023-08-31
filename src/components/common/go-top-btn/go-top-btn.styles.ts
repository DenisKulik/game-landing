import styled from 'styled-components'

const GoTopBtn = styled.button`
    position: fixed;
    padding: 8px 16px;
    right: 3rem;
    bottom: 3rem;
    font-size: 22px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
        opacity: 0.8;
    }
`

export const S = { GoTopBtn }
