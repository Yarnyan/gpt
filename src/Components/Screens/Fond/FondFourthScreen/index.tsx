import styles from './styles.module.scss'
import img from '../../../../assets/img/fond-fourth-img.png'
import imgMob from '../../../../assets/img/fond-fourth-img-mob.png'
import { useTranslation } from 'react-i18next';
import Pros from './component/Pros';
import { ProsData } from './component/data/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondFourthScreen() {

    const {t} = useTranslation();

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return ( 
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <motion.h2 className={styles.title} ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>{t("fondFourthScreen.title.text")}</motion.h2>
                    <div className={styles.prosContainer}>
                        {ProsData.map((item) => {
                            return (
                                <Pros id={item.id} title={item.title} subtitle={item.subtitle}  />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default FondFourthScreen;