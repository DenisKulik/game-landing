import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'
import { EditionGame } from 'data'

type DescriptionProps = {
    order: number
}

type CurrentEditionProps = {
    edition: EditionGame
    current: EditionGame
}

const ExploreItem = styled.div`
    margin-bottom: 4.4rem;

    ${FlexContainer} {
        @media ${({ theme }) => theme.media.large} {
            gap: 2rem;
        }
    }
`

const ExploreTitle = styled.h3`
    position: relative;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    z-index: 2;
`

const Switch = styled(FlexContainer)`
    position: relative;
    margin-bottom: 3rem;
    z-index: 10;
`

const CurrentEdition = styled.span<CurrentEditionProps>`
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

const SwitchControl = styled.div`
    width: 5.4rem;
    height: 2.6rem;
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkgrey};
    border-radius: 1.2rem;
`

const Knob = styled.span`
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

const Checkbox = styled.input.attrs(() => ({
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

const ImageWrapper = styled(FlexContainer)`
    text-align: center;
`

const ImageInner = styled.div`
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

const Image = styled.img`
    max-width: unset;
    position: absolute;
    bottom: 0;
    left: 0;

    @media ${({ theme }) => theme.media.large} {
        max-width: 100%;
    }
`

const Description = styled.div<DescriptionProps>`
    max-width: 60rem;
    width: 100%;
    align-self: flex-end;
    order: ${({ order }) => order};
`

const EditionList = styled.ul`
    list-style: none;
    text-align: left;
    min-height: 34rem;
`

const EditionItem = styled.li`
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 3.6rem;

    & > span:first-child {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const S = {
    ExploreItem,
    ExploreTitle,
    Switch,
    CurrentEdition,
    SwitchControl,
    Knob,
    Checkbox,
    ImageWrapper,
    ImageInner,
    Image,
    Description,
    EditionList,
    EditionItem,
}
