import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import 'styles/slider/slider.styles.css'
import { NewsSlide } from 'components/slider/news-slide'
import { NewsItem } from 'data'

type Props = {
    data: NewsItem[]
}

export const Slider = ({ data }: Props) => {
    const items = data.map((item, idx) => <NewsSlide key={idx} item={item} data-value={idx + 1} />)

    return (
        <AliceCarousel
            items={items}
            autoWidth
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={2000}
            animationDuration={1500}
            animationType="fadeout"
            mouseTracking
            disableDotsControls
            infinite
            keyboardNavigation
        />
    )
}
