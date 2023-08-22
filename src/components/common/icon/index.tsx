import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'

type Props = {
    icon: IconType
    size?: string
    color?: string
}

export const Icon = ({ icon, size = '1.6rem', color = 'white' }: Props) => {
    const IconComponent = icon

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent />
        </IconContext.Provider>
    )
}
