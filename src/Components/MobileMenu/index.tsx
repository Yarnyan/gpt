import styles from './styles.module.scss'
import icon from '../../assets/img/mobileMenu.svg'
import { useTranslation } from 'react-i18next';
import Socials from '../Socials';
import { useState } from 'react';
import MobNav from './MobNav';

function MobileMenu() {

    const { t } = useTranslation();

    const [menu, setMenu] = useState(false);

    return (
        <div className={styles.mobMenu}>
            <div className="container">
                <Socials />
                <p className={styles.text}>{t("mainFirstScreen.text")}</p>
                <button className={styles.btn} onClick={() => setMenu(!menu)}>
                    {
                        menu ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect opacity="0.5" x="16.707" y="16.3536" width="23.5" height="0.5" transform="rotate(45 16.707 16.3536)" stroke="white" stroke-width="0.5" />
                                <rect opacity="0.5" y="0.353553" width="23.5" height="0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 32.7206 16.1036)" stroke="white" stroke-width="0.5" />
                            </svg> :
                            <img src={icon} alt="menu" />

                    }
                </button>
                <div className={`${styles.menu} ${menu ? styles.active : ''}`}>
                    <MobNav setMenu={setMenu} />
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;