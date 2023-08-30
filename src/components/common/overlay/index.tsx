import { S } from 'components/common/overlay/overlay.styles.ts'

type Props = {
    active: boolean
}

export const Overlay = ({ active = false }: Props) => {
    return <S.Overlay active={active ? active.toString() : undefined}></S.Overlay>
}
