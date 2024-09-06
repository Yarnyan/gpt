import styles from './styles.module.scss'
import img from '../../../../assets/img/about-fourth-screen-img.png'
import { useTranslation } from 'react-i18next';

function AboutFourthScreen() {

    const {t} = useTranslation();

    return (  
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("aboutFourthScreen.title.text")}<br/><span>{t("aboutFourthScreen.title.span")}</span></h2>
                    <div className={styles.pluses}>
                        <div className={styles.item}>
                            <p className={styles.value}>10%+</p>
                            <p className={styles.text}>{t("aboutFourthScreen.pluses.first")}</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.value}>100%</p>
                            <p className={styles.text}>{t("aboutFourthScreen.pluses.second")}</p>
                        </div>
                    </div>
                    <img src={img} alt="money tree" className={styles.image}/>

                </div>
            </div>
        </section>
    );
}

export default AboutFourthScreen;