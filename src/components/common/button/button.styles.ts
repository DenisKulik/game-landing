import styled, { css } from 'styled-components'
import { Color, Size } from 'components/common/button/index.tsx'

type Props = Partial<{
    color: Color
    size: Size
}>

export const StyledButton = styled.button<Props>`
    display: block;
    text-transform: uppercase;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: 6px;
    transition: all 0.2s;

    ${({ size }) =>
        (size === 'big' &&
            css<Props>`
                font-size: 1.6rem;
                padding: 1.4rem 1.9rem;
            `) ||
        (size === 'medium' &&
            css<Props>`
                font-size: 1.6rem;
                padding: 1.1rem 3.6rem;
            `) ||
        (size === 'small' &&
            css<Props>`
                font-size: 1.3rem;
                padding: 0.7rem 1.8rem;
            `)}

    ${({ color }) =>
        (color === 'primary' &&
            css<Props>`
                background-color: ${props => props.theme.colors.primary};
            `) ||
        (color === 'secondary' &&
            css<Props>`
                background-color: ${props => props.theme.colors.secondary};
            `) ||
        (color === 'dark' &&
            css<Props>`
                background-color: ${props => props.theme.colors.darkgrey};
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
