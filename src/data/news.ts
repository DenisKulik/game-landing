import news1Img from 'assets/img/news1.webp'
import news3Img from 'assets/img/news3.webp'
import news4Img from 'assets/img/news4.webp'

export const news: NewsItem[] = [
    {
        date: '19/10/2022',
        title: 'is the final chapter in an epic story. See the new video',
        img: news1Img,
        description:
            'The highly anticipated game God of War: Ragnarok will debut in just over twenty days. On this occasion, representatives of the Santa Monica studio together with Sony decided to releasea new trailer dedicated to the epic history of Kratos andAtreus - in this way we have received confirmation thatRagnarok is the final chapter of the adventures of the god ofwar.',
    },
    {
        date: '19/10/2022',
        title: 'will receive a large update on release',
        img: news3Img,
        description:
            'God of War: Ragnarok is fast approaching. No wonder that we have been regularlyreceiving new information and materials related to the title in recent times.Last week, a trailer presenting the possibilities of the game on PlayStation 5hit the network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out thatupcoming sequel to the adventures of Kratos and Atreus will receive a major update on release',
    },
    {
        date: '19/10/2022',
        title: 'is officially one of the largest PS4 games by size',
        img: news4Img,
        description:
            'Digital distribution enthusiasts need to get ready for tons of downloads. The second adventure of Kratos and Atreus in the High North from the premiere will occupy nearly 120GB - when deciding to buy a title from PlayStation Store, it is worth planning your download wisely to start the game on the day of the premiere.',
    },
]

export type NewsItem = {
    date: string
    title: string
    img: string
    description: string
}
