import React from 'react'
import { StyledButton } from 'components/common/button/button.styles.ts'

type Props = DefaultButton & {
    title: string
    size?: Size
    color?: Color
    callback?: () => void
}

export const Button = ({
    title,
    size = 'medium',
    color = 'primary',
    callback,
    ...restProps
}: Props) => {
    return (
        <StyledButton size={size} color={color} onClick={callback} {...restProps}>
            {title}
        </StyledButton>
    )
}

// types
type DefaultButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type Size = 'medium' | 'small'
export type Color = 'primary' | 'secondary'
