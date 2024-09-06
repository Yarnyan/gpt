import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import img from '../../../../assets/img/bot-fourth-screen-img.png'
import imgMob from '../../../../assets/img/bot-fourth-screen-img-mob.png'
import { useMediaQuery } from 'react-responsive';

function BotFourthScreen() {

    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 700px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>{t("botFourthScreen.title")}</h2>
                    <RedirectionButton text='botFourthScreen.buttonText' to='https://amiofficial.com' />
                    {
                        !match ? 
                        <img src={img} alt="" className={styles.image}/> :
                        <img src={imgMob} alt="" className={styles.image}/>
                    }
                </div>
            </div>
        </section>
    );
}

export default BotFourthScreen;