import cardStandard from 'assets/img/card-standard.webp'
import cardStandard2x from 'assets/img/card-standard-2x.webp'
import cardDeluxe from 'assets/img/card-deluxe.webp'
import cardDeluxe2x from 'assets/img/card-deluxe-2x.webp'

export type Edition = {
    edition: string
    platform: string
    img: string
    img2x: string
    info: string[]
    price: number
}

export const editions: Edition[] = [
    {
        edition: 'Standard Edition',
        platform: 'PS5',
        img: cardStandard,
        img2x: cardStandard2x,
        info: ['Offline play enabled', 'Remote Play supported', 'Trigger effect required'],
        price: 19.99,
    },
    {
        edition: 'Standard Edition',
        platform: 'PS4',
        img: cardStandard,
        img2x: cardStandard2x,
        info: ['Offline play enabled', 'Remote Play supported', 'Trigger effect required'],
        price: 18.99,
    },
    {
        edition: 'Digital Deluxe Edition',
        platform: 'PS5',
        img: cardDeluxe,
        img2x: cardDeluxe2x,
        info: [
            'All features of Standard Edition',
            'Darkdale Armour',
            'Official digital soundtrack',
        ],
        price: 29.99,
    },
]
