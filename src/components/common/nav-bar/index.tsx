import { S } from 'components/common/nav-bar/nav-bar.styles.ts'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    visible?: boolean
}

const navItems: string[] = ['editions', 'controller', 'about', 'explore', 'news', 'faq']

export const NavBar = ({ visible = true }: Props) => {
    const navElements = navItems.map(elem => (
        <li key={elem} role="menuitem">
            <S.NavLink to={elem}>{elem}</S.NavLink>
        </li>
    ))

    return (
        <S.Nav visible={visible ? visible.toString() : undefined}>
            <FlexContainer as={S.LinkList} gap="3rem" wrap="wrap" role="menu">
                {navElements}
            </FlexContainer>
        </S.Nav>
    )
}
