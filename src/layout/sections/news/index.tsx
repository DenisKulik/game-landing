import { S } from 'layout/sections/news/news.styles.ts'
import { Slider } from 'components/slider'
import { news } from 'data'

export const News = () => {
    return (
        <S.News id="news">
            <S.NewsHeading>News</S.NewsHeading>
            <Slider data={news} />
        </S.News>
    )
}
