import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import { InfoTabs, TInfoTabs } from '../../../../data/BotInfoTabs';
import RedefineComponent from './components/index'
import { indexData } from './components/data/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function FondSixthScreen() {

    const { t } = useTranslation();

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                        className={styles.title}
                    >
                        {t("fondSixthScreen.title.text_first_part")}
                    </motion.p>
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

export default FondSixthScreen;