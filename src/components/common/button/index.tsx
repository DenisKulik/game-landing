import React from 'react'
import { S } from 'components/common/button/button.styles.ts'

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
        <S.Button size={size} color={color} onClick={callback} {...restProps}>
            {title}
        </S.Button>
    )
}

// types
type DefaultButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type Size = 'big' | 'medium' | 'small'
export type Color = 'primary' | 'secondary' | 'dark'
