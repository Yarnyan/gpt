import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoTabs, TInfoTabs } from '../../../../data/BotInfoTabs';

function BotThirdScreen() {

    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="innerContent">
                    <div className={styles.tabs}>
                        <div className={styles.item}>
                            <p className={styles.title}>
                                {t("botThirdScreen.title.text_first_part")}<br />
                                <span>{t("botThirdScreen.title.span")}</span><br />
                                {t("botThirdScreen.title.text_second_part")}
                            </p>
                        </div>
                        {
                            InfoTabs.map((item: TInfoTabs) => {
                                return (
                                    <div key={item.id} className={styles.item}>
                                        <p className={styles.value}>{item.value}</p>
                                        <p className={styles.text}>{t(item.text)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BotThirdScreen;