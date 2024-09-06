import styles from './styles.module.scss';
import img from '../../../../assets/img/map.png'
import imgMob from '../../../../assets/img/map-mob.png'
import Socials from '../../../Socials';
import { useTranslation } from 'react-i18next';
import RedirectionButton from '../../../RedirectionButton';
import { useMediaQuery } from 'react-responsive';

function ContactsScreen() {

    const { t } = useTranslation();

    const match = useMediaQuery({
        query: '(max-width: 1300px)'
    })

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    {
                        !match &&
                        <Socials />
                    }

                    <h2 className={styles.title}>{t('contactsScreen.title')}</h2>
                    {
                        !match ?
                            <img src={img} alt="" className={styles.image} /> :
                            <img src={imgMob} alt="" className={styles.image} />

                    }
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <p className={styles.infoTitle}>{t('contactsScreen.contactsItems.first')}</p>
                            <div className={styles.itemText}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                    <g opacity="0.5">
                                        <path d="M6.53985 0.0043268C3.16233 0.122836 0.356437 2.75793 0.0322785 6.12151C-0.0339475 6.79423 0.00439397 7.44603 0.122904 8.06995C0.122904 8.06995 0.13336 8.14315 0.168216 8.28257C0.272783 8.74964 0.429634 9.20276 0.624827 9.628C1.30451 11.2383 2.87651 13.9327 6.40391 16.8641C6.62002 17.0453 6.93721 17.0453 7.1568 16.8641C10.6842 13.9362 12.2562 11.2418 12.9394 9.62452C13.138 9.19928 13.2914 8.74964 13.396 8.27909C13.4274 8.14315 13.4413 8.06647 13.4413 8.06647C13.5215 7.6482 13.5633 7.21947 13.5633 6.78029C13.5633 2.95312 10.3949 -0.131611 6.53985 0.0043268ZM6.78036 10.1543C4.96088 10.1543 3.48649 8.67993 3.48649 6.86046C3.48649 5.04099 4.96088 3.56659 6.78036 3.56659C8.59983 3.56659 10.0742 5.04099 10.0742 6.86046C10.0742 8.67993 8.59983 10.1543 6.78036 10.1543Z" fill="white" />
                                    </g>
                                </svg>
                                <p>81 Tamam Street, Cyprys</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.infoTitle}>{t('contactsScreen.contactsItems.second')}</p>
                            <div className={styles.itemText}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M8.5 4.3871C6.23216 4.3871 4.3871 6.23216 4.3871 8.5C4.3871 10.7678 6.23216 12.6129 8.5 12.6129C9.94679 12.6129 11.2206 11.8614 11.9539 10.7288C12.4902 11.2176 13.2028 11.5161 13.9839 11.5161C15.647 11.5161 17 10.1631 17 8.5C17 3.81311 13.187 0 8.5 0C3.81305 0 0 3.81311 0 8.5C0 13.1869 3.81305 17 8.5 17C10.7704 17 12.905 16.1158 14.5104 14.5104L13.3471 13.3471C12.0524 14.6418 10.331 15.3549 8.5 15.3549C4.72026 15.3549 1.64515 12.2798 1.64515 8.5C1.64515 4.72022 4.72026 1.64515 8.5 1.64515C12.2797 1.64515 15.3549 4.72026 15.3549 8.5C15.3549 9.25594 14.7398 9.87096 13.9839 9.87096C13.228 9.87096 12.6129 9.25594 12.6129 8.50003V8.5C12.6129 6.23216 10.7678 4.3871 8.5 4.3871ZM8.5 10.9678C7.13924 10.9678 6.03224 9.86073 6.03224 8.5C6.03224 7.13927 7.1392 6.03224 8.5 6.03224C9.8608 6.03224 10.9678 7.13927 10.9678 8.5C10.9678 9.8607 9.86076 10.9678 8.5 10.9678Z" fill="#FFCF52" />
                                </svg>
                                <a href="/">help@ami.finance</a>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.infoTitle}>{t('contactsScreen.contactsItems.third')}</p>
                            <div className={styles.itemText}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path d="M7.84784 11.2041L7.517 15.9505C7.99034 15.9505 8.19534 15.7431 8.44118 15.4941L10.6604 13.3308L15.2588 16.7657C16.1022 17.2451 16.6964 16.9926 16.9239 15.9743L19.9423 1.54819L19.9431 1.54734C20.2106 0.275743 19.4923 -0.221504 18.6706 0.0904442L0.928504 7.01876C-0.282359 7.49816 -0.264025 8.18665 0.722666 8.4986L5.25861 9.93764L15.7947 3.21333C16.2905 2.87843 16.7414 3.06373 16.3705 3.39863L7.84784 11.2041Z" fill="#429BED" />
                                </svg>
                                <a href="/">AMI Finance</a>
                            </div>
                        </div>
                    </div>
                    <RedirectionButton to='/' text="contactsScreen.buttonText" />
                </div>
            </div>
        </section>
    );
}

export default ContactsScreen;