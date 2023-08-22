import React from 'react'
import { StyledButton } from 'components/common/button/button.styles.ts'

type Props = DefaultButtonType & {
    title: string
    variant?: string
    color?: string
    callback?: () => void
}

export const Button = ({ title, variant = 'medium', color, callback, ...restProps }: Props) => {
    return (
        <StyledButton variant={variant} color={color} onClick={callback} {...restProps}>
            {title}
        </StyledButton>
    )
}

// types
type DefaultButtonType = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
