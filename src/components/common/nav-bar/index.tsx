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

type Props = Partial<{
    isOpened: boolean
    justify: string
}>

const navItems: string[] = ['editions', 'controller', 'about', 'explore', 'news', 'faq']

export const NavBar = ({ isOpened = true, justify = 'flex-start' }: Props) => {
    const navElements = navItems.map(elem => (
        <li key={elem}>
            <StyledLink href="#">{elem}</StyledLink>
        </li>
    ))

    return (
        <FlexContainer as={StyledNav} opened={isOpened} justify={justify} gap="3rem" wrap="wrap">
            <FlexContainer as={LinkList} gap="3rem" wrap="wrap">
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
