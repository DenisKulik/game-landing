import { useState } from 'react'

import { Container } from 'components/common/container'
import { StyledHeader } from 'layout/header/header.styles.ts'
import { NavBar } from 'components/common/nav-bar'
import { MenuBtn } from 'components/common/menu-btn'
import { Timer } from 'components/timer'
import { FlexContainer } from 'components/common/flex-container'

export const Header = () => {
    const [isOpenedNav, setIsOpenedNav] = useState(false)

    const onClickBurgerMenu = () => {
        setIsOpenedNav(!isOpenedNav)
    }

    return (
        <StyledHeader>
            <Container as={FlexContainer} justify="space-between" wrap="wrap">
                <FlexContainer align="flex-start" gap="5rem" wrap="wrap">
                    <MenuBtn callback={onClickBurgerMenu} active={isOpenedNav} />
                    <NavBar visible={isOpenedNav} />
                </FlexContainer>
                <Timer initialTime={86399} />
            </Container>
        </StyledHeader>
    )
}
