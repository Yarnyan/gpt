import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import { AboutInfoTabs, TAboutInfoTabs } from '../../../../data/AboutInfoTabs';

function AboutThirdScreen() {

    const {t} = useTranslation();

    return ( 
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>
                        {t('aboutThirdScreen.title.part1')}
                        <span>{t("aboutThirdScreen.title.span")}</span>
                        {t("aboutThirdScreen.title.part2")}    
                    </h2>
                    <div className={styles.blocks}>
                        {
                            AboutInfoTabs.map((item: TAboutInfoTabs) => {
                                return (
                                    <div key={item.id} className={styles.item}>
                                        <p className={styles.value}>{item.value}</p>
                                        <p className={styles.text}>
                                            {t(`aboutThirdScreen.pluses.${item.id}`)}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
     );
}

export default AboutThirdScreen;