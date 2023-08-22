import { AppWrapper } from 'app/app.styles.ts'
import { Header } from 'layout/header'
import { Main } from 'layout/sections/main'

export const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Main />
        </AppWrapper>
    )
}
