import {
    ArrowDown,
    CurrentLanguage,
    LanguageItem,
    LanguagesList,
    LanguagesWrapper,
    LinkList,
    StyledLink,
    StyledNav,
} from 'components/common/nav-bar/nav-bar.styles.ts'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    isOpened: boolean
}

const navItems: string[] = ['editions', 'controller', 'about', 'explore', 'news', 'faq']

export const NavBar = ({ isOpened }: Props) => {
    const navElements = navItems.map(elem => (
        <li key={elem}>
            <StyledLink href="#">{elem}</StyledLink>
        </li>
    ))

    return (
        <FlexContainer as={StyledNav} isOpened={isOpened} gap="3rem">
            <FlexContainer as={LinkList} gap="3rem">
                {navElements}
            </FlexContainer>
            <LanguagesWrapper align="center">
                <CurrentLanguage>english</CurrentLanguage>
                <ArrowDown size="2rem" />
                <LanguagesList>
                    <LanguageItem>Русский</LanguageItem>
                    <LanguageItem>English</LanguageItem>
                </LanguagesList>
            </LanguagesWrapper>
        </FlexContainer>
    )
}
