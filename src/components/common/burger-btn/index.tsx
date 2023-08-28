import { Lines, StyledBurgerBtn } from 'components/common/burger-btn/burger-btn.styles.ts'

type Props = {
    active?: boolean
    callback: () => void
}

export const BurgerBtn = ({ active = false, callback }: Props) => {
    return (
        <StyledBurgerBtn onClick={callback}>
            <Lines active={active ? active.toString() : undefined}></Lines>
        </StyledBurgerBtn>
    )
}
