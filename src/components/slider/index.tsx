import {
    ArrowLeft,
    ArrowRight,
    ButtonNext,
    ButtonPrev,
    Slides,
    StyledSlider,
} from 'components/slider/slider.styles.ts'
import { NewsSlide } from 'components/slider/news-slide'
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
                <ArrowLeft />
            </ButtonPrev>
            <ButtonNext>
                <ArrowRight />
            </ButtonNext>
        </StyledSlider>
    )
}
