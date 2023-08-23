import styled from 'styled-components'
import bg from 'assets/img/bg.webp'
import snow from 'assets/img/snow.gif'
import { moveInRight } from 'styles'

export const StyledMain = styled.section`
    padding-top: 18rem;
    min-height: 76.5rem;
    position: relative;

    &:before,
    &:after {
        content: '';
        width: 136.3rem;
        height: 76.5rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }

    &:before {
        background: url(${bg}) center/cover no-repeat;
    }

    &:after {
        background: url(${snow}) center/cover no-repeat;
        opacity: 0.1;
    }
`

export const MainContainer = styled.div`
    position: relative;
    z-index: 10;
    animation: ${moveInRight} 1.2s ease-in-out;
`

export const MainWrapper = styled.div`
    max-width: 53.8rem;
`

export const MainTitle = styled.h1`
    margin-bottom: 2.6rem;
    font-size: 10rem;
    font-weight: 600;
    line-height: 10rem;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const MainDescr = styled.p`
    margin-bottom: 5rem;
    font-size: 1.8rem;
    color: ${props => props.theme.colors.sea};
`
