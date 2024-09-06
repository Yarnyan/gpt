import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import Pros from './component/Pros';
import { ProsData } from './component/data/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondFirstScreen() {

    const { t } = useTranslation();
    
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">

                <motion.h2 className={styles.title} ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>{t("fondFirstScreen.title.text")}<br /><span>{t("fondFirstScreen.title.span")}</span></motion.h2>

                    <div className={styles.prosContainer}>
                        {ProsData.map((item) => {
                            return (
                                <Pros id={item.id} title={item.title} subtitle={item.subtitle} />
                            )
                        })}
                    </div>

                    <div className={styles.pluses}>
                        {/* <div className={styles.item}>
                            <div className={styles.iconWrap}>
                                <img src={icon1} alt="settings" />
                            </div>
                            <p>
                                {
                                    t("fondFirstScreen.pluses.first")
                                }
                            </p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrap}>
                                <img src={icon2} alt="settings" />
                            </div>
                            <p>
                                {
                                    t("fondFirstScreen.pluses.second")
                                }
                            </p>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FondFirstScreen;