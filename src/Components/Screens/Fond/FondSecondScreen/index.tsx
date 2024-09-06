import styles from './styles.module.scss'
import img from '../../../../assets/img/fond-second-img.png'
import imgMob from '../../../../assets/img/fond-second-img-mob.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import { useMediaQuery } from 'react-responsive';
import RedefineComponent from './components/index'
import { indexData } from './components/data/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondSecondScreen() {

    const {t} = useTranslation();

    const match = useMediaQuery({
        query: "(max-width: 700px)"
    })

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return ( 
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <motion.h2 className={styles.title} ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>{t("fondSecondScreen.title")}</motion.h2>
                    {
                        !match ?
                        <img src={img} alt="" className={styles.image}/> :
                        <img src={imgMob} alt="" className={styles.image}/>

                    }
                    <div className={styles.RedefineContainer}>
                        {indexData.map((item) => {
                            return (
                                <RedefineComponent subtitle={item.subtitle} title={item.title} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default FondSecondScreen;