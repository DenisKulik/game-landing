import styled, { css } from 'styled-components'

type Props = {
    color?: string
    variant?: string
}

export const StyledButton = styled.button<Props>`
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background-color: ${props => props.color || props.theme.colors.primary};
    transition: all 0.2s;

    ${({ variant }) =>
        variant === 'medium' &&
        css<Props>`
            padding: 1.1rem 3.6rem;
        `}

    &:hover {
        transform: translateY(-0.3rem);
        box-shadow: 0 1.5rem 1rem rgb(0 0 0 / 20%);
    }

    &:active,
    &:focus {
        outline: 0;
        transform: translateY(-0.1rem);
        box-shadow: 0 0.75rem 0.5rem rgb(0 0 0 / 20%);
    }
`
