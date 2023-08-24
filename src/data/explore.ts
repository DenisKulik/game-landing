import pcImg from 'assets/img/pc.webp'
import psImg from 'assets/img/ps.webp'
import bgCardPs from 'assets/img/bg-card-ps.webp'
import bgCardPc from 'assets/img/bg-card-pc.webp'

export const explore: Explore = {
    pc: {
        platform: 'pc',
        title: 'Here are the God of War (PC) System Requirements',
        img: pcImg,
        bgCard: bgCardPc,
        characteristics: ['minimum', 'recommended'],
        editionOne: {
            cpu: 'Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)',
            ram: '8 GB',
            os: 'Windows 10 64-bit',
            videocard: 'NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)',
            'pixel shader': 5.1,
            'vertex shader': 5.1,
            'free disk space': '70 GB',
            'dedicated video ram': '4 GB',
            price: 15.99,
        },
        editionTwo: {
            cpu: 'Intel Core i7-4770 (4 core 3.4 GHz) or AMD Ryzen 5 1500X (4 core 3.5 GHz)',
            ram: '16 GB',
            os: 'Windows 10 64-bit',
            videocard: 'NVIDIA GTX 1060 (6 GB) or AMD RX 580 (8 GB)',
            'pixel shader': 5.1,
            'vertex shader': 5.1,
            'free disk space': '70 GB',
            'dedicated video ram': '6 GB or higher',
            price: 15.99,
        },
    },
    ps: {
        platform: 'ps',
        title: 'God of War for PS4',
        img: psImg,
        bgCard: bgCardPs,
        characteristics: ['standard', 'limited'],
        editionOne: {
            platform: 'PS4',
            premiere: '20.4.2018',
            publisher: 'Sony Interactive Entertainment Europe',
            Species: 'Action, Adventure',
            Voice: 'English, Polish, Russian',
            languages: 'English, Dutch, Polish, Russian, Turkish',
            price: 15.99,
        },
        editionTwo: {
            platform: 'PS4',
            premiere: '20.4.2018',
            publisher: 'Sony Interactive Entertainment Europe',
            Species: 'Action, Adventure',
            Voice: 'English, Polish, Russian',
            languages: 'English, Dutch, Polish, Russian, Turkish',
            extras: 'Exclusive Artbook, In-Game Skins Pack',
            availability: 'Limited Quantity',
            price: 18.99,
        },
    },
}

// types
export type Platform = 'pc' | 'ps'

export type PcEdition = {
    cpu: string
    ram: string
    os: string
    videocard: string
    'pixel shader': number
    'vertex shader': number
    'free disk space': string
    'dedicated video ram': string
    price: number
}

export type PsEdition = {
    platform: string
    premiere: string
    publisher: string
    Species: string
    Voice: string
    languages: string
    extras?: 'Exclusive Artbook, In-Game Skins Pack'
    availability?: 'Limited Quantity'
    price: number
}

export type Data<T> = {
    platform: Platform
    title: string
    img: string
    bgCard: string
    characteristics: string[]
    editionOne: T
    editionTwo: T
}

export type Explore = {
    pc: Data<PcEdition>
    ps: Data<PsEdition>
}
