import {
    StyledNewsSlide,
    GameName,
    Date,
    NewsDescr,
    NewsImage,
    NewsTitle,
    NewsContent,
} from 'components/slider/news-slide/news-slide.styles.ts'
import { NewsItem } from 'data'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    item: NewsItem
}

export const NewsSlide = ({ item }: Props) => {
    return (
        <StyledNewsSlide>
            <FlexContainer justify="space-between">
                <GameName>God of War Ragnarok</GameName>
                <Date>{item.date}</Date>
            </FlexContainer>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsContent gap="2.4rem">
                <NewsImage src={item.img} alt={item.title} width="278" height="249" />
                <NewsDescr>{item.description}</NewsDescr>
            </NewsContent>
        </StyledNewsSlide>
    )
}
