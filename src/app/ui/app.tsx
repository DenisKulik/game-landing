import { AppWrapper } from 'app/ui/app.styles.ts'
import { Header } from 'layout/header'
import { Main } from 'layout/sections/main'
import { Editions } from 'layout/sections/editions'

export const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Main />
            <Editions />
        </AppWrapper>
    )
}
