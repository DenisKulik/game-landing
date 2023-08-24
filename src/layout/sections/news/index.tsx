import { NewsHeading, StyledNews } from 'layout/sections/news/news.styles.ts'
import { Slider } from 'components/slider'
import { news } from 'data'

export const News = () => {
    return (
        <StyledNews>
            <NewsHeading>News</NewsHeading>
            <Slider data={news} />
        </StyledNews>
    )
}
