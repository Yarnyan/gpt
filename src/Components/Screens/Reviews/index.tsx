import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import Socials from '../../Socials';
import 'swiper/css';
import { TAllReviews, allReviews } from '../../../data/Reviews';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

function ReviewsScreen() {

    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("reviews.title")}</h2>
                    <p className={styles.subtitle}>{t("reviews.subtitle")}</p>
                    {
                        !match ?
                            <Swiper
                                className={styles.slider}
                                slidesPerView={2}
                                modules={[Navigation]}
                                navigation
                            >
                                {
                                    allReviews.map((item: TAllReviews) => {
                                        return (
                                            <SwiperSlide className={styles.slide} key={item.id}>
                                                <p className={styles.text}>{item.text}</p>
                                                <div className={styles.author}>
                                                    <img src={item.author.img} alt="" />
                                                    <div className={styles.authorInfo}>
                                                        <p className={styles.name}>{item.author.name}</p>
                                                        <div className={styles.bottom}>
                                                            <p className={styles.locage}>{item.author.age} {item.author.location}</p>
                                                            <p className={styles.date}>{item.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper> :
                            <Swiper
                                className={styles.slider}
                                slidesPerView={1}
                                modules={[Navigation]}
                                navigation
                            >
                                {
                                    allReviews.map((item: TAllReviews) => {
                                        return (
                                            <SwiperSlide className={styles.slide} key={item.id}>
                                                <p className={styles.text}>{item.text}</p>
                                                <div className={styles.author}>
                                                    <img src={item.author.img} alt="" />
                                                    <div className={styles.authorInfo}>
                                                        <p className={styles.name}>{item.author.name}</p>
                                                        <div className={styles.bottom}>
                                                            <p className={styles.locage}>{item.author.age} {item.author.location}</p>
                                                            <p className={styles.date}>{item.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                    }

                </div>
            </div>
        </section>
    );
}

export default ReviewsScreen;