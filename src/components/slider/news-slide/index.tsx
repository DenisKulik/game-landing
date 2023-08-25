import {
    NewsInfo,
    StyledNewsSlide,
    GameName,
    Date,
    NewsDescr,
    NewsImage,
    NewsTitle,
} from 'components/slider/news-slide/news-slide.styles.ts'
import { NewsItem } from 'data'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    item: NewsItem
}

export const NewsSlide = ({ item }: Props) => {
    return (
        <StyledNewsSlide>
            <NewsInfo justify="space-between">
                <GameName>God of War Ragnarok</GameName>
                <Date>{item.date}</Date>
            </NewsInfo>
            <NewsTitle>{item.title}</NewsTitle>
            <FlexContainer wrap="wrap" gap="2.4rem">
                <NewsImage src={item.img} alt={item.title} width="278" height="249" />
                <NewsDescr>{item.description}</NewsDescr>
            </FlexContainer>
        </StyledNewsSlide>
    )
}
