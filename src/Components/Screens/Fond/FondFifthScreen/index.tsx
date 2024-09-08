import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import img from '../../../../assets/img/fond-third-img.png'
import imgMob from '../../../../assets/img/fond-third-img-mob.png'
import imgDiag from '../../../../assets/img/Diagramm.png'
import { useMediaQuery } from 'react-responsive';
import { indexData } from './components/data/data';
import RedefineComponent from './components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondFifthScreen() {

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
                    >{t('fondFifthScreen.title')}</motion.h2>

                    {
                        !match ?
                            <img src={img} alt="" className={styles.image} /> :
                            <img src={imgMob} alt="" className={styles.image} />
                    }
                    <div className={styles.RedefineContainer}>
                        {indexData.map((item) => {
                            return (
                                <RedefineComponent title={item.title} subtitle={item.subtitle} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FondFifthScreen;