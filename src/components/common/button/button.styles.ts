import styled, { css } from 'styled-components'
import { Color, Size } from 'components/common/button/index.tsx'

type StyledButtonProps = Partial<{
    color: Color
    size: Size
}>

const Button = styled.button<StyledButtonProps>`
    display: block;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: 6px;
    transition: all 0.2s;

    ${({ size }) =>
        (size === 'big' &&
            css<StyledButtonProps>`
                font-size: 1.6rem;
                padding: 1.4rem 1.9rem;
            `) ||
        (size === 'medium' &&
            css<StyledButtonProps>`
                font-size: 1.6rem;
                padding: 1.1rem 3.6rem;
            `) ||
        (size === 'small' &&
            css<StyledButtonProps>`
                font-size: 1.3rem;
                padding: 0.7rem 1.8rem;
            `)}

    ${({ color }) =>
        (color === 'primary' &&
            css<StyledButtonProps>`
                background-color: ${({ theme }) => theme.colors.primary};
            `) ||
        (color === 'secondary' &&
            css<StyledButtonProps>`
                background-color: ${({ theme }) => theme.colors.secondary};
            `) ||
        (color === 'dark' &&
            css<StyledButtonProps>`
                background-color: ${({ theme }) => theme.colors.darkgrey};
            `)}

    &:hover {
        filter: brightness(1.2);
        transform: translateY(-0.3rem);
        box-shadow: 0 1.5rem 1rem rgb(0 0 0 / 20%);
    }

    &:active,
    &:focus {
        outline: 0;
        filter: brightness(1.1);
        transform: translateY(-0.1rem);
        box-shadow: 0 0.75rem 0.5rem rgb(0 0 0 / 20%);
    }
`

export const S = {
    Button,
}
