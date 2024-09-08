import icon1 from '../assets/img/vuesax/bold/home.svg'
import icon2 from '../assets/img/vuesax/bold/graph.svg'
import icon3 from '../assets/img/vuesax/bold/android.svg'
import icon4 from '../assets/img/vuesax/bold/info-circle.svg'
// import icon5 from '../assets/img/vuesax/bold/archive-book.svg'
// import icon6 from '../assets/img/vuesax/bold/like.svg'
// import icon7 from '../assets/img/vuesax/bold/message-question.svg'
// import icon8 from '../assets/img/vuesax/bold/call.svg'
// import icon9 from '../assets/img/vuesax/bold/profile-circle.svg'

export interface TTabs {
    id: number,
    icon: string,
    title: string,
    to: string
}

export const Tabs: TTabs[] = [
    {
        id: 1,
        icon: icon1,
        title: 'main',
        to: '/'
    },
    {
        id: 2,
        icon: icon2,
        title: 'availability',
        to: '/availability'
    },
    {
        id: 3,
        icon: icon4,
        title: 'versatility',
        to: '/versatility'
    },
    {
        id: 4,
        icon: icon3,
        title: 'Smart Manager',
        to: '/manager'
    },
]