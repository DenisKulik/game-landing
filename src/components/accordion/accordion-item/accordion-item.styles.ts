import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'
import { AiFillPlusCircle } from 'react-icons/ai'

type AccordionProps = {
    active: boolean
}

export const StyledAccordionItem = styled.div`
    transition: transform 0.4s ease-in-out;
    transform: translate(0);
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

    &:not(:last-child) {
        margin-bottom: 1.8rem;
    }
`

export const AccordionHeader = styled(FlexContainer)`
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
`

export const Question = styled.p`
    text-align: center;
    font-size: 1.7rem;
    font-weight: 600;
`

export const Plus = styled(AiFillPlusCircle)<AccordionProps>`
    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
    transform: rotate(${({ active }) => (active ? 45 : 0)}deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`

export const AccordionContent = styled.div`
    padding-bottom: 1rem;
`

export const Answer = styled.p<AccordionProps>`
    max-height: ${({ active }) => (active ? 100 : 0)}px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`
