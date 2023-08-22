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

export const NavBar = ({ isOpened }: Props) => {
    return (
        <StyledNav as={FlexContainer} isOpened={isOpened} gap="3rem">
            <LinkList as={FlexContainer} gap="3rem">
                <li>
                    <StyledLink href="#">editions</StyledLink>
                </li>
                <li>
                    <StyledLink href="#">controller</StyledLink>
                </li>
                <li>
                    <StyledLink href="#">about game</StyledLink>
                </li>
                <li>
                    <StyledLink href="#">explore</StyledLink>
                </li>
                <li>
                    <StyledLink href="#">news</StyledLink>
                </li>
                <li>
                    <StyledLink href="#">faq</StyledLink>
                </li>
            </LinkList>
            <LanguagesWrapper as={FlexContainer} align="center">
                <CurrentLanguage>english</CurrentLanguage>
                <ArrowDown size="2rem" />
                <LanguagesList>
                    <LanguageItem>Русский</LanguageItem>
                    <LanguageItem>English</LanguageItem>
                </LanguagesList>
            </LanguagesWrapper>
        </StyledNav>
    )
}
