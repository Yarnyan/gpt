import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import Socials from '../../Socials';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TAllFaq, allFaq } from '../../../data/FAQ';
import { useMediaQuery } from 'react-responsive';

function FAQScreen() {

    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("faq.title")}</h2>
                    <p className={styles.subtitle}>{t("faq.subtitle")}</p>
                    {
                        !match ?
                            <Swiper
                                className={styles.slider}
                                slidesPerView={3}
                                modules={[Navigation]}
                                navigation
                            >
                                {
                                    allFaq.map((item: TAllFaq) => {
                                        return (
                                            <SwiperSlide className={styles.slide} key={item.id}>
                                                <p className={styles.itemTitle}>{item.title}</p>
                                                <p className={styles.question}>{item.question}</p>
                                                <p className={styles.answer}>{item.answer.part1}</p>
                                                <p className={styles.answer}>{item.answer.part2}</p>
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
                                    allFaq.map((item: TAllFaq) => {
                                        return (
                                            <SwiperSlide className={styles.slide} key={item.id}>
                                                <p className={styles.itemTitle}>{item.title}</p>
                                                <p className={styles.question}>{item.question}</p>
                                                <p className={styles.answer}>{item.answer.part1}</p>
                                                <p className={styles.answer}>{item.answer.part2}</p>
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

export default FAQScreen;