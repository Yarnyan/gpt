import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import img from '../../../../assets/img/main-second-screen-img.png'
import mainImg from '../../../../assets/img/main.png'
import imgMob from '../../../../assets/img/main-second-screen-img-mob.png'
import { useMediaQuery } from 'react-responsive';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function MainSecondScreen() {

    const { t } = useTranslation();

    const isTabletImg = useMediaQuery({
        query: '(max-width: 700px)'
    })

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <motion.h2 className={styles.title} ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}><span>{t("mainSecondScreen.tradingBotText")}</span><br />
                        {t("mainSecondScreen.title")}</motion.h2>
                    {
                        !isTabletImg ?
                            <img className={styles.image} src={img} alt="background" /> :
                            <img className={styles.image} src={imgMob} alt="background" />
                    }
                    {/* <RedirectionButton to="/bot" text='mainSecondScreen.buttonText' /> */}
                </div>
            </div>
        </section>
    );
}

export default MainSecondScreen;