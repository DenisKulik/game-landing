import { Container } from 'components/common/container'
import { HeaderContainer, HeaderMenu, StyledHeader } from 'layout/header/header.styles.ts'
import { NavBar } from 'components/common/nav-bar'
import { BurgerBtn } from 'components/burger-btn'
import { Timer } from 'components/timer'

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer as={Container}>
                <HeaderMenu>
                    <BurgerBtn />
                    <NavBar />
                </HeaderMenu>
                <Timer />
            </HeaderContainer>
        </StyledHeader>
    )
}
