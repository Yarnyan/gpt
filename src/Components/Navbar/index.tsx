import { useCallback, useEffect, useState } from 'react';
import { TTabs, Tabs } from '../../data/NavbarTabs';
import styles from './styles.module.scss'
import { useTranslation } from "react-i18next";
import Scrollspy from 'react-scrollspy'

function Navbar() {

    const [activeTab, setActiveTab] = useState('/')

    const { t } = useTranslation();

    const pages = ['main', 'fond', 'bot', 'about', 'news', 'reviews', 'faq', 'contacts']

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

    const [activeIndex, setActiveIndex] = useState(0);

    const [changable, setChange] = useState(true)

    useEffect(() => {
        console.log(activeIndex)
    }, [activeIndex])

    useEffect(() => {
        const content = document.querySelector('.content');
        let lastScrollTop = 0;
        var scrollTimer: any = null;
        content?.addEventListener('scroll', () => {
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(function () {
                scrollTimer = null;
                var top = content.scrollTop;
                if (lastScrollTop > top) {
                    setActiveIndex((state) => state - 1)
                } else if (lastScrollTop < top) {
                    setActiveIndex((state) => state + 1)
                }
                lastScrollTop = top;
            }, 100);
        })
    }, [])


    return (
        <>
            <Scrollspy onUpdate={(active) => {
                if (active) {
                    // @ts-ignore
                    if(pages.indexOf(activeTab) < pages.indexOf(active.getAttribute('id'))) {
                        if (active.getAttribute('id') !== 'main') {
                            setActiveIndex(-1);
                        } else {
                            setActiveIndex(0);
                        }
                    } else {
                        // @ts-ignore
                        setActiveIndex(lines[active.getAttribute('id')].length)
                    }
                    // @ts-ignore
                    setActiveTab(active.getAttribute('id'));
                    
                }
            }} offset={0} className={styles.content} items={pages} currentClassName={styles.active} rootEl='.content' componentTag={'div'}>
                {
                    Tabs.map(({ id, title, icon, to }: TTabs) => {
                        return (
                            <a href={"#" + (to !== '/' ? to.substring(1) : 'main')} key={id} className={`${styles.tab} ${id === 1 ? styles.first : ''}`} style={{ gridArea: to !== '/' ? to.substring(1) : 'main' }}>
                                <img className={styles.icon} src={icon} alt={title} />
                                <p className={styles.title}>{t(`navbar.${to === '/' ? 'main' : to.substring(1)}`)}</p>
                            </a>
                        )
                    })
                }
            </Scrollspy>
            <div className={styles.lines}>
                {
                    //@ts-ignore
                    lines[activeTab] && lines[activeTab].map((item, i) => {
                        return (
                            <span className={i === activeIndex ? styles.activeLine : ''}></span>
                        )
                    })
                }
            </div>
        </>

    );
}

export default Navbar;