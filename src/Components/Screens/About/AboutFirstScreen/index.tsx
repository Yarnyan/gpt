import styles from './styles.module.scss'
import img from '../../../../assets/img/about-first-screen-img.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import Socials from '../../../Socials';
import { useMediaQuery } from 'react-responsive';

function AboutFirstScreen() {

    const { t } = useTranslation();

    const isTablet = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                {
                        !isTablet &&
                        <Socials />
                    }
                    <h2 className={styles.title}>{t("aboutFirstScreen.title")}</h2>
                    <p className={styles.subtitle}>{t("aboutFirstScreen.subtitle")}</p>
                    <img src={img} alt="logo" className={styles.image} />
                    <p className={styles.text}><span>{t("aboutFirstScreen.span")}</span>{t("aboutFirstScreen.text")}</p>
                    <RedirectionButton text={"aboutFirstScreen.buttonText"} to={"/profile"} />
                </div>
            </div>
        </section>
    );
}

export default AboutFirstScreen;