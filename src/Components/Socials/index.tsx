import styles from './styles.module.scss'
import social1 from '../../assets/img/telegram.svg'
import social2 from '../../assets/img/email.svg'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Socials() {

    const { i18n } = useTranslation();

    const [lang, setLang] = useState('en')

    useEffect(() => {
        const lang = localStorage.getItem('defaultLang');

        if (lang) {
            changeLanguage(lang);
        }
    }, [])

    const changeLanguage = (language: string) => {
        setLang(language)
        i18n.changeLanguage(language);
        localStorage.setItem('defaultLang', language);
    };

    const matches = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    const [langModal, setModal] = useState(false);

    return (
        <div className={styles.socials}>
            {
                !matches &&
                <>
                    <a className={styles.link} href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <rect opacity="0.1" x="0.5" y="0.499939" width="49" height="49" stroke="white" />
                            <path opacity="0.5" d="M23.592 27.2269L23.3141 31.1357C23.7117 31.1357 23.8839 30.9649 24.0904 30.7598L25.9545 28.9783L29.8171 31.807C30.5254 32.2018 31.0245 31.9939 31.2156 31.1553L33.751 19.2749L33.7517 19.2742C33.9764 18.227 33.373 17.8175 32.6828 18.0744L17.7799 23.7801C16.7628 24.1749 16.7782 24.7419 17.607 24.9988L21.4171 26.1839L30.2672 20.6462C30.6836 20.3704 31.0623 20.523 30.7508 20.7988L23.592 27.2269Z" fill="white" />
                        </svg>
                    </a>
                    <a className={styles.link} href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <rect opacity="0.1" x="0.5" y="0.499939" width="49" height="49" stroke="white" />
                            <path d="M29.3529 17.9999H21.1176C18.6471 17.9999 17 19.2352 17 22.1176V27.8823C17 30.7646 18.6471 31.9999 21.1176 31.9999H29.3529C31.8235 31.9999 33.4706 30.7646 33.4706 27.8823V22.1176C33.4706 19.2352 31.8235 17.9999 29.3529 17.9999ZM29.74 23.0152L27.1624 25.0741C26.6188 25.5105 25.9271 25.7246 25.2353 25.7246C24.5435 25.7246 23.8435 25.5105 23.3082 25.0741L20.7306 23.0152C20.4671 22.8011 20.4259 22.4058 20.6318 22.1423C20.8459 21.8788 21.2329 21.8294 21.4965 22.0435L24.0741 24.1023C24.7 24.6046 25.7624 24.6046 26.3882 24.1023L28.9659 22.0435C29.2294 21.8294 29.6247 21.8705 29.8306 22.1423C30.0447 22.4058 30.0035 22.8011 29.74 23.0152Z" fill="white" fill-opacity="0.5" />
                        </svg>
                    </a>
                </>
            }
            <button onClick={() => setModal(!langModal)} className={`${styles.link} ${styles.language}`}>
                {lang}
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="5" viewBox="0 0 7 5" fill="none">
                    <path opacity="0.5" d="M3.5 4.99994L0.468912 0.499938L6.53109 0.499939L3.5 4.99994Z" fill="white" />
                </svg>
            </button>
            {
                langModal &&
                <div className={styles.changeLangModal}>
                    <button onClick={() => {
                        changeLanguage('ru')
                        setModal(false)
                    }} className={`${styles.link} ${styles.language}`}>
                        RU
                    </button>
                    <button onClick={() => {
                        changeLanguage('en')
                        setModal(false)
                    }} className={`${styles.link} ${styles.language}`}>
                        EN
                    </button>
                </div>
            }
        </div>
    );
}

export default Socials;