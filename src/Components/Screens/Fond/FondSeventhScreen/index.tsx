import styles from './styles.module.scss'
import img from '../../../../assets/img/fond-seventh-img.png'
import imgMob from '../../../../assets/img/fond-seventh-img-mob.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import { useMediaQuery } from 'react-responsive';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondSeventhScreen() {

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
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className={styles.title}
                    >{t("fondSeventhScreen.title")}</motion.h2>

                    <RedirectionButton text='fondSeventhScreen.buttonText' to='https://amiofficial.com' />
                    {
                        !match ?
                            <img src={img} alt="" className={styles.image} /> :
                            <img src={imgMob} alt="" className={styles.image} />
                    }
                </div>
            </div>
        </section>
    );
}

export default FondSeventhScreen;