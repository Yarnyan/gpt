import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import Socials from '../../Socials';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TAllNews, allNews } from '../../../data/News';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
function NewsFirstScreen() {
    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("news.title")}</h2>
                    <p className={styles.subtitle}>{t("news.subtitle")}</p>
                    {
                        !match ?
                            <Swiper
                                className={styles.slider}
                                slidesPerView={2}
                                modules={[Navigation]}
                                navigation
                            >
                                {
                                    allNews.map((item: TAllNews) => {
                                        return (
                                            <SwiperSlide style={{ background: `url(${item.img})` }} className={styles.slide} key={item.id}>
                                                <div className={styles.top}>
                                                    <p className={styles.theme}>{item.theme}</p>
                                                    <p className={styles.date}>{item.date}</p>
                                                </div>
                                                <p className={styles.title}>{item.title}</p>
                                                <Link className={styles.button} to={item.link}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                        <path opacity="0.5" d="M33.278 17.222C33.278 16.9458 33.0542 16.722 32.778 16.722L28.278 16.722C28.0019 16.722 27.778 16.9458 27.778 17.222C27.778 17.4981 28.0019 17.722 28.278 17.722L32.278 17.722L32.278 21.722C32.278 21.9981 32.5019 22.222 32.778 22.222C33.0542 22.222 33.278 21.9981 33.278 21.722L33.278 17.222ZM17.5752 33.1319L33.1316 17.5755L32.4245 16.8684L16.8681 32.4248L17.5752 33.1319Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper> :
                            <div
                                className={styles.slider}
                            >
                                {
                                    allNews.map((item: TAllNews) => {
                                        return (
                                            <div style={{ background: `url(${item.img})` }} className={styles.slide} key={item.id}>
                                                <div className={styles.top}>
                                                    <p className={styles.theme}>{item.theme}</p>
                                                    <p className={styles.date}>{item.date}</p>
                                                </div>
                                                <p className={styles.title}>{item.title}</p>
                                                <button className={styles.button}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                        <path opacity="0.5" d="M33.278 17.222C33.278 16.9458 33.0542 16.722 32.778 16.722L28.278 16.722C28.0019 16.722 27.778 16.9458 27.778 17.222C27.778 17.4981 28.0019 17.722 28.278 17.722L32.278 17.722L32.278 21.722C32.278 21.9981 32.5019 22.222 32.778 22.222C33.0542 22.222 33.278 21.9981 33.278 21.722L33.278 17.222ZM17.5752 33.1319L33.1316 17.5755L32.4245 16.8684L16.8681 32.4248L17.5752 33.1319Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }

                </div>
            </div>
        </section>
    );
}

export default NewsFirstScreen;