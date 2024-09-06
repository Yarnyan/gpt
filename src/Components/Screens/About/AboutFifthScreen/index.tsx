import styles from './styles.module.scss'
import img from '../../../../assets/img/about-fifth-screen-img.png'
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';

function AboutFifthScreen() {

    const {t} = useTranslation();

    return ( 
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <h2 className={styles.title}>
                        {t("aboutFifthScreen.title.part1")}<br/>
                        <span>{t("aboutFifthScreen.title.span")}</span><br/>
                        {t("aboutFifthScreen.title.part2")}
                    </h2>
                    <RedirectionButton text='aboutFifthScreen.buttonText' to='/profile'/>
                    <img src={img} alt="AI" className={styles.image}/>
                </div>
            </div>
        </section>
     );
}

export default AboutFifthScreen;