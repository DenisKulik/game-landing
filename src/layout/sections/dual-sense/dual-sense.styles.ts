import styled from 'styled-components'
import { SectionHeading } from 'components/common/section-heading'
import { levitation } from 'styles/animations/levitation.ts'
import { FlexContainer } from 'components/common/flex-container'

const DualSense = styled.section`
    padding-top: 6rem;
`

const DualSenseHeading = styled(SectionHeading)`
    margin-bottom: 2rem;
`
const DualSenseWrapper = styled(FlexContainer)`
    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
        align-items: center;
        gap: 7.5rem;
    }
`

const DualSenseInfo = styled.div`
    max-width: 42.5rem;
`

const DualSenseDescription = styled.p`
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: ${({ theme }) => theme.colors.sea};

    &:not(:last-child) {
        margin-bottom: 2.2rem;
    }
`

const GameName = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`

const Discount = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

const Price = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        width: 194px;
        height: 119px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(79, 96, 152, 0.8);
        filter: blur(75px);
    }

    @media ${({ theme }) => theme.media.medium} {
        order: -1;
    }
`

const DualSenseImage = styled.img`
    animation: ${levitation} 1.5s infinite linear alternate;
`

export const S = {
    DualSense,
    DualSenseHeading,
    DualSenseWrapper,
    DualSenseInfo,
    DualSenseDescription,
    GameName,
    Discount,
    Price,
    ImageWrapper,
    DualSenseImage,
}
