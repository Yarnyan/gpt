import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function RedirectionButton({text, to}: {text: string, to: string}) {
    const {t} = useTranslation();

    return (
        <a className={styles.link} href='/bot'>
            {t(text)}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path opacity="0.25" d="M17.7635 0.736544C17.7635 0.460402 17.5396 0.236545 17.2635 0.236544L12.7635 0.236544C12.4873 0.236544 12.2635 0.460401 12.2635 0.736544C12.2635 1.01269 12.4873 1.23654 12.7635 1.23654L16.7635 1.23654L16.7635 5.23654C16.7635 5.51269 16.9873 5.73654 17.2635 5.73654C17.5396 5.73654 17.7635 5.51269 17.7635 5.23654L17.7635 0.736544ZM1.35355 17.3536L17.617 1.0901L16.9099 0.382991L0.646447 16.6464L1.35355 17.3536Z" fill="white" />
            </svg>
        </a>
    );
}

export default RedirectionButton;