import {
    FooterCopy,
    FooterImg,
    FooterInfo,
    FooterYear,
    StyledFooter,
} from 'layout/footer/footer.styles.ts'
import { Container } from 'components/common/container'
import psLogo from 'assets/img/ps-logo.webp'
import { NavBar } from 'components/common/nav-bar'

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <NavBar justify="space-between" />
                <FooterInfo>
                    Download of this product is subject to the PlayStation Network Terms of Service
                    and our Software Usage Terms plus any specific additional conditions applying to
                    this product. If you do not wish to accept these terms, do not download this
                    product. See Terms of Service for more important information.
                </FooterInfo>
                <FooterImg src={psLogo} alt="ps-logo" />
                <FooterYear>2023</FooterYear>
                <FooterCopy>
                    Developed by{' '}
                    <a href="https://github.com/DenisKulik" target="_blank">
                        Denis Kulik
                    </a>
                    . All rights reserved.
                </FooterCopy>
            </Container>
        </StyledFooter>
    )
}
