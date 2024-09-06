import styles from './styles.module.scss'
import img from '../../../../assets/img/about-second-screen-img.png'
import imgMob from '../../../../assets/img/about-second-screen-img-mob.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import { useMediaQuery } from 'react-responsive';


function AboutSecondScreen() {

    const { t } = useTranslation();

    const isTablet = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("aboutSecondScreen.title")}</h2>
                    <p className={styles.subtitle}>{t("aboutSecondScreen.subtitle")}</p>
                    {
                        !isTablet ?
                            <img className={styles.image} src={img} alt="background" /> :
                            <img className={styles.image} src={imgMob} alt="background" />
                    }
                    <p className={styles.topText}>{t("aboutSecondScreen.text.part1")}</p>
                    <p className={styles.bottomText}>{t("aboutSecondScreen.text.part2")}</p>
                    <RedirectionButton text={'aboutSecondScreen.buttonText'} to={'/profile'} />
                </div>
            </div>
        </section>
    );
}

export default AboutSecondScreen;