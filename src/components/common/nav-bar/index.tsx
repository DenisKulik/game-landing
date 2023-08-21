import { RiArrowDownSLine } from 'react-icons/ri'
import {
    LanguageBlock,
    LanguageSelect,
    List,
    NavItem,
    StyledLink,
    StyledNav,
} from 'components/common/nav-bar/nav-bar.styles.ts'

export const NavBar = () => {
    return (
        <StyledNav>
            <List>
                <NavItem>
                    <StyledLink href="#">editions</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink href="#">controller</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink href="#">about game</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink href="#">explore</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink href="#">news</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink href="#">faq</StyledLink>
                </NavItem>
            </List>

            <LanguageBlock>
                <span>english</span>
                <RiArrowDownSLine />

                <LanguageSelect>
                    <div>Русский</div>
                    <div>English</div>
                </LanguageSelect>
            </LanguageBlock>
        </StyledNav>
    )
}
