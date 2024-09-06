import styles from './styles.module.scss'
import bg from '../../../../assets/img/bot-second-screen-bg.jpg'
import logo from '../../../../assets/img/Ami-logo.svg'
import Socials from '../../../Socials'
import { useTranslation } from "react-i18next";
import img from '../../../../assets/img/main-first-screen-img.png'
import imgMob from '../../../../assets/img/main-first-screen-img-mob.png'
import { useMediaQuery } from 'react-responsive';


const MainFirstScreen = () => {

    const { t } = useTranslation();

    const matches = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    const matchesTab = useMediaQuery({
        query: '(max-width: 700px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    {
                        !matches &&
                        <Socials />
                    }
                    <img src={logo} alt="AMI" className={styles.logo} />
                    {
                        !matchesTab ?
                        <img src={img} alt="" className={styles.image}/> :
                        <img src={imgMob} alt="" className={styles.image}/>
                    }
                    {
                        !matches &&
                        <p className={styles.text}>{t("mainFirstScreen.text")}</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default MainFirstScreen