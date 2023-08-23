import cardStandard from 'assets/img/card-standard.png'
import cardDeluxe from 'assets/img/card-deluxe.png'

export const appData: AppData = {
    editions: [
        {
            edition: 'Standard Edition',
            platform: 'PS5',
            img: cardStandard,
            info: ['Offline play enabled', 'Remote Play supported', 'Trigger effect required'],
            price: 19.99,
        },
        {
            edition: 'Standard Edition',
            platform: 'PS4',
            img: cardStandard,
            info: ['Offline play enabled', 'Remote Play supported', 'Trigger effect required'],
            price: 18.99,
        },
        {
            edition: 'Digital Deluxe Edition',
            platform: 'PS5',
            img: cardDeluxe,
            info: [
                'All features of Standard Edition',
                'Darkdale Armour',
                'Official digital soundtrack',
            ],
            price: 29.99,
        },
    ],
}

// types
export type Edition = {
    edition: string
    platform: string
    img: string
    info: string[]
    price: number
}

export type AppData = {
    editions: Edition[]
}
