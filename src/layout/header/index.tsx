import { useState } from 'react'

import { Container } from 'components/common/container'
import { HeaderWrapper, StyledHeader } from 'layout/header/header.styles.ts'
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
            <Container>
                <HeaderWrapper justify="space-between" gap="3rem">
                    <FlexContainer align="flex-start" gap="5rem" wrap="wrap">
                        <MenuBtn callback={onClickBurgerMenu} active={isOpenedNav} />
                        <NavBar visible={isOpenedNav} />
                    </FlexContainer>
                    <Timer initialTime={86399} />
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    )
}
