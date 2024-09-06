import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import img from '../../../../assets/img/bot-second-screen-img.png'

function BotSecondScreen() {

    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}><span>{t("botSecondScreen.title.span")}</span><br />{t("botSecondScreen.title.text")}</h2>
                    <p className={styles.subtitle}>{t("botSecondScreen.subtitle")}</p>
                    <img src={img} alt="partners" className={styles.image} />
                    <p className={styles.text}>{t('botSecondScreen.text')}</p>
                    <RedirectionButton text='botSecondScreen.buttonText' to='/connect-bot' />
                </div>
            </div>
        </section>
    );
}

export default BotSecondScreen;