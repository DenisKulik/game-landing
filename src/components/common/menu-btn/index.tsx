import { S } from 'components/common/menu-btn/burger-btn.styles.ts'

type Props = {
    active?: boolean
    callback: () => void
}

export const MenuBtn = ({ active = false, callback }: Props) => {
    return (
        <S.BurgerBtn onClick={callback} aria-label="navigation-menu">
            <S.Lines active={active ? active.toString() : undefined}></S.Lines>
        </S.BurgerBtn>
    )
}
