import { S } from 'components/slider/news-slide/news-slide.styles.ts'
import { NewsItem } from 'data'
import { FlexContainer } from 'components/common/flex-container'

type Props = {
    item: NewsItem
}

export const NewsSlide = ({ item }: Props) => {
    return (
        <S.NewsSlide>
            <FlexContainer justify="space-between">
                <S.GameName>God of War Ragnarok</S.GameName>
                <S.Date>{item.date}</S.Date>
            </FlexContainer>
            <S.NewsTitle>{item.title}</S.NewsTitle>
            <S.NewsContent gap="2.4rem">
                <S.NewsImage
                    src={item.img}
                    srcSet={`${item.img2x} 2x`}
                    alt={item.title}
                    width="278"
                    height="249"
                />
                <S.NewsDescription>{item.description}</S.NewsDescription>
            </S.NewsContent>
        </S.NewsSlide>
    )
}
