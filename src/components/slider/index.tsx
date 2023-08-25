import {
    ArrowLeft,
    ArrowRight,
    ButtonNext,
    ButtonPrev,
    Slides,
    StyledSlider,
} from 'components/slider/slider.styles.ts'
import { NewsSlide } from 'components/news-slide'
import { NewsItem } from 'data'

type Props = {
    data: NewsItem[]
}

export const Slider = ({ data }: Props) => {
    const slides = data.map((item, idx) => <NewsSlide key={idx} item={item} />)

    return (
        <StyledSlider>
            <Slides wrap="wrap" gap="1rem">
                {slides}
            </Slides>
            <ButtonPrev>
                <ArrowLeft size="3rem" />
            </ButtonPrev>
            <ButtonNext>
                <ArrowRight size="3rem" />
            </ButtonNext>
        </StyledSlider>
    )
}
