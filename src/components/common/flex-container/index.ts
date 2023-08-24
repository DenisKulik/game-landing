import styled from 'styled-components'

type Props = Partial<{
    direction: string
    justify: string
    align: string
    wrap: string
    gap: string
}>

export const FlexContainer = styled.div<Props>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ align }) => align || 'stretch'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
    gap: ${({ gap }) => gap || '0px'};
`
