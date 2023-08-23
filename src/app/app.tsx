import { AppWrapper } from 'app/app.styles.ts'
import { Header } from 'layout/header'
import { Main } from 'layout/sections/main'
import { Editions } from 'layout/sections/editions'
import { DualSense } from 'layout/sections/dual-sense'
import { About } from 'layout/sections/about'
import { Explore } from 'layout/sections/explore'

export const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Main />
            <Editions />
            <DualSense />
            <About />
            <Explore />
        </AppWrapper>
    )
}
