import styled from 'styled-components'
import bg from 'assets/img/bg.webp'
import bg2x from 'assets/img/bg-2x.webp'
import snow from 'assets/img/snow.webp'
import { moveInRight } from 'styles'
import { Container } from 'components/common/container'

const Main = styled.section`
    padding-top: 23rem;
    min-height: 77rem;
    position: relative;

    &::before,
    &::after {
        content: '';
        width: 136.3rem;
        height: 76.5rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }

    &::before {
        background: url(${bg}) center/cover no-repeat;
    }

    &::after {
        background: url(${snow}) center/cover no-repeat;
        opacity: 0.1;
    }

    @media ${({ theme }) => theme.media.small} {
        button {
            margin: 0 auto;
        }
    }

    @media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
        &::before {
            background: url(${bg2x}) center/cover no-repeat;
        }
    }
`

const MainContainer = styled(Container)`
    position: relative;
    z-index: 10;
    animation: ${moveInRight} 1.2s ease-in-out;
`

const MainWrapper = styled.div`
    max-width: 53.8rem;

    @media ${({ theme }) => theme.media.small} {
        max-width: 100%;
        text-align: center;
    }
`

const MainTitle = styled.h1`
    margin-bottom: 2.6rem;
    font-size: 10rem;
    font-weight: 600;
    line-height: 10rem;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    @media ${({ theme }) => theme.media.small} {
        font-size: 6rem;
        line-height: 6rem;
    }
`

const MainDescription = styled.p`
    margin-bottom: 5rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.sea};
`

export const S = {
    Main,
    MainContainer,
    MainWrapper,
    MainTitle,
    MainDescription,
}
