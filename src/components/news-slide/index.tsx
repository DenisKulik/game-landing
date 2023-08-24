import { NewsInfo, StyledNewsSlide } from 'components/news-slide/news-slide.styles.ts'
import { NewsItem } from 'data'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    item: NewsItem
}

export const NewsSlide = ({ item }: Props) => {
    return (
        <StyledNewsSlide>
            <NewsInfo justify="space-between">
                <span>God of War Ragnarok</span>
                <span>{item.date}</span>
            </NewsInfo>
            <h3>{item.title}</h3>
            <FlexContainer>
                <img src={item.img} alt={item.title} width="278" height="249" />
                <p>{item.description}</p>
            </FlexContainer>
        </StyledNewsSlide>
    )
}
