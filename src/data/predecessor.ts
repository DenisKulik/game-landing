type Predecessor = {
    pc: PcOptions
    ps4: Ps4Options
}

export const predecessor: Predecessor = {
    pc: {
        minimum: {
            cpu: 'Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)',
            ram: '8 GB',
            os: 'Windows 10 64-bit',
            videocard: 'NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)',
            'pixel shader': 5.1,
            'vertex shader': 5.1,
            'free disk space': '70 GB',
            'dedicated video ram': '4 GB',
        },
        recommended: {
            cpu: 'Intel Core i7-4770 (4 core 3.4 GHz) or AMD Ryzen 5 1500X (4 core 3.5 GHz)',
            ram: '16 GB',
            os: 'Windows 10 64-bit',
            videocard: 'NVIDIA GTX 1060 (6 GB) or AMD RX 580 (8 GB)',
            'pixel shader': 5.1,
            'vertex shader': 5.1,
            'free disk space': '70 GB',
            'dedicated video ram': '6 GB or higher',
        },
    },
    ps4: {
        standard: {
            platform: 'PS4',
            premiere: '20.4.2018',
            publisher: 'Sony Interactive Entertainment Europe',
            Species: 'Action, Adventure',
            Voice: 'English, Polish, Russian',
            languages: 'English, Dutch, Polish, Russian, Turkish',
        },
        limited: {
            platform: 'PS4',
            premiere: '20.4.2018',
            publisher: 'Sony Interactive Entertainment Europe',
            Species: 'Action, Adventure',
            Voice: 'English, Polish, Russian',
            languages: 'English, Dutch, Polish, Russian, Turkish',
            extras: 'Exclusive Artbook, In-Game Skins Pack',
            availability: 'Limited Quantity',
        },
    },
}

export type SystemRequirements = {
    cpu: string
    ram: string
    os: string
    videocard: string
    'pixel shader': number
    'vertex shader': number
    'free disk space': string
    'dedicated video ram': string
}

export type ConsoleEdition = {
    platform: string
    premiere: string
    publisher: string
    Species: string
    Voice: string
    languages: string
    extras?: 'Exclusive Artbook, In-Game Skins Pack'
    availability?: 'Limited Quantity'
}

type PcOptions = {
    minimum: SystemRequirements
    recommended: SystemRequirements
}

type Ps4Options = {
    standard: ConsoleEdition
    limited: ConsoleEdition
}
