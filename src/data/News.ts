import img1 from '../assets/img/news-bg1.jpg'
import img2 from '../assets/img/news-bg2.jpg'

export interface TAllNews {
    id: number,
    title: string,
    theme: string,
    date: string,
    img: string,
    link: string,
}


export const allNews: TAllNews[] = [
    {
        id: 1,
        title: "OpenAI привлек $300 млн при оценке в $27–29 млрд",
        theme: 'Искусственный интеллект',
        date: '10.07.2023',
        img: img1,
        link: 'https://incrussia.ru/news/openai-300/'
    },
    {
        id: 2,
        title: "Парламент ЕС утвердил первые в мире комплексные правила для криптоактивов",
        theme: 'Криптовалюта',
        date: '08.07.2023',
        img: img2,
        link: 'https://inventure.com.ua/news/world/parlament-es-utverdil-pervye-v-mire-kompleksnye-pravila-dlya-kriptoaktivov'
    },
    // {
    //     id: 1,
    //     title: "OpenAI привлек $300 млн при оценке в $27–29 млрд",
    //     theme: 'Искусственный интеллект',
    //     date: '10.07.2023',
    //     img: img1
    // },
    // {
    //     id: 2,
    //     title: "Парламент ЕС утвердил первые в мире комплексные правила для криптоактивов",
    //     theme: 'Криптовалюта',
    //     date: '08.07.2023',
    //     img: img2
    // }
]