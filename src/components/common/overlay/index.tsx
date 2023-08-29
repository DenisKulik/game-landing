import { StyledOverlay } from 'components/common/overlay/overlay.styles.ts'

type Props = {
    active: boolean
}

export const Overlay = ({ active = false }: Props) => {
    return <StyledOverlay active={active ? active.toString() : undefined}></StyledOverlay>
}
