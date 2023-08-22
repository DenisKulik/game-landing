import { StyledBurgerBtn } from 'components/common/burger-btn/burger-btn.styles.ts'

type Props = {
    active?: boolean
    callback?: () => void
}

export const BurgerBtn = ({ active = false, callback }: Props) => {
    return (
        <StyledBurgerBtn onClick={callback} active={active}>
            <span></span>
        </StyledBurgerBtn>
    )
}
