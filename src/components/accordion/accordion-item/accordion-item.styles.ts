import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

type AccordionProps = {
    active?: string
}

const AccordionItem = styled.div`
    transition: transform 0.4s ease-in-out;
    transform: translate(0);
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

    margin-bottom: 1.8rem;
`

const AccordionHeader = styled(FlexContainer)`
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
`

const Question = styled.p`
    text-align: left;
    font-size: 1.7rem;
    font-weight: 600;
`

const Plus = styled.span<AccordionProps>`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkgrey};

    &::before {
        font-size: 2.5rem;
        content: '+';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(${({ active }) => (active ? 45 : 0)}deg);
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`

const AccordionContent = styled.div`
    padding-bottom: 1rem;
`

const Answer = styled.p<AccordionProps>`
    max-height: ${({ active }) => (active ? 150 : 0)}px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`

export const S = {
    AccordionItem,
    AccordionHeader,
    Question,
    Plus,
    AccordionContent,
    Answer,
}
