import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

type DescriptionProps = {
    order: number
}

type CurrentEditionProps = {
    edition: 'EditionOne' | 'EditionTwo'
    current: 'EditionOne' | 'EditionTwo'
}

export const StyledExploreItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 4.4rem;
    }
`

export const ExploreTitle = styled.h3`
    position: relative;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    z-index: 2;
`

export const Switch = styled(FlexContainer)`
    position: relative;
    margin-bottom: 3rem;
`

export const CurrentEdition = styled.span<CurrentEditionProps>`
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ edition, current, theme }) =>
        edition === current ? theme.colors.white : theme.colors.grey};

    &::first-letter {
        text-transform: uppercase;
    }
`

export const SwichControl = styled.div`
    width: 5.4rem;
    height: 2.6rem;
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkgrey};
    border-radius: 1.2rem;
`

export const Knob = styled.span`
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
`

export const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    cursor: pointer;
    z-index: 2;

    &:checked + ${Knob} {
        color: red;
        transform: translateX(2.8rem);
    }
`

export const ImageWrapper = styled(FlexContainer)`
    text-align: center;
`

export const ImageInner = styled.div`
    width: 35rem;
    height: 35rem;
    position: relative;
    border-radius: 1.2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &::before {
        content: '';
        width: 6.1rem;
        height: 14rem;
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
        filter: blur(7.5rem);
        opacity: 0.8;
        background: ${({ theme }) => theme.colors.secondary};
    }
`

export const Image = styled.img`
    max-width: unset;
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Description = styled.div<DescriptionProps>`
    max-width: 60rem;
    width: 100%;
    align-self: flex-end;
    order: ${({ order }) => order};
`

export const EditionList = styled.ul`
    list-style: none;
    text-align: left;
    min-height: 34rem;
`

export const EditionItem = styled.li`
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 3.6rem;

    & > span:first-child {
        color: ${({ theme }) => theme.colors.primary};
    }
`
