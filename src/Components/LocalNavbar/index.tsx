import { useEffect } from 'react';
import styles from './styles.module.scss'

function LocalNavbar({activeTab}: {activeTab: string}) {

    const lines = {
        main: ['', ''],
        fond: ['', '', '', '', '', '', ''],
        bot: ['', '', '', ''],
        about: ['', '', '', '', ''],
        news: [''],
        reviews: [''],
        faq: [''],
        contacts: [''],
    }

    useEffect(() => {
        console.log(activeTab)
    }, [activeTab])

    return (
        <div className={styles.lines}>
            {
                //@ts-ignore
                lines[activeTab] && lines[activeTab].map(item => {
                    return (
                        <span></span>
                    )
                })
            }
        </div>
    );
}

export default LocalNavbar;