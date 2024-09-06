import styles from './styles.module.scss'
import img from '../../../../assets/img/fond-seventh-img.png'
import invest from '../../../../assets/img/Invest.png'
import imgMob from '../../../../assets/img/fond-seventh-img-mob.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import { useMediaQuery } from 'react-responsive';
import { indexData } from './components/data/data'
import RedefineComponent from './components/index';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondEightScreen() {

    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 700px)'
    })

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">

                    <motion.h2
                        className={styles.title}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >{t("fondNineScreen.title")}</motion.h2>
                    {
                        !match ?
                            <img src={invest} alt="" className={styles.image} /> : null
                    }
                    <div className={styles.RedefineContainer}>
                        {indexData.map((item) => {
                            return (
                                <RedefineComponent id={item.id} title={item.title} subtitle={item.subtitle} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FondEightScreen;