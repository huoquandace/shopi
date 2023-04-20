import { useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss'

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {

    // const MOBILE_SCREEN_SIZE = 375
    // const TABLET_SCREEN_SIZE = 768
    const LAPTOP_SCREEN_SIZE = 1028
    // const DESKTOP_SCREEN_SIZE = 1920

    const [sidebarStatus, setSidebarStatus] = useState(window.innerWidth < LAPTOP_SCREEN_SIZE ? false : true);
    const [lastSidebarStatus, setLastSidebarStatus] = useState(window.innerWidth < LAPTOP_SCREEN_SIZE ? false : true);

    useEffect(() => {
        var lastScrollTop = 0;

        const is_numeric = str => /^\d+$/.test(str);

        const getVar = variable => {
            var value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
            for (var i = 0; i < value.length; i++) {
                if (!is_numeric(value.charAt(i))) {
                    return parseInt(value.slice(0, -i - 1))
                }
            }
        };
        
        const collapseSidebarOnScrollToFooter = () => {
            var st = document.documentElement.scrollTop;
            var isToggle = document.documentElement.scrollTop + window.innerHeight < document.documentElement.offsetHeight - 100
            if (st < lastScrollTop && isToggle && lastSidebarStatus) {
                setSidebarStatus(true)
            } else if (!isToggle && lastSidebarStatus) {
                setSidebarStatus(false)
            }
            lastScrollTop = st;
        }

        const relativizeSidebarOnScrollToFooter = () => {
            var sidebar = document.getElementsByClassName(styles.Sidebar).item(0)
            var footer = document.getElementsByClassName(styles.Footer).item(0)
            if (document.documentElement.scrollTop + window.innerHeight >= footer.offsetTop) {
                sidebar.style.position = 'absolute';
                sidebar.style.top = 'auto';
            } else {
                sidebar.style.position = 'fixed';
                sidebar.style.top = `${getVar('--HeaderHeight')}rem`;
            }
        }

        const handleScroll = () => {
            collapseSidebarOnScrollToFooter()
            relativizeSidebarOnScrollToFooter()
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [lastSidebarStatus]);
    
    const handelClick = () => {
        setSidebarStatus(!sidebarStatus)
        setLastSidebarStatus(!(lastSidebarStatus))
    }

    return (
        <div className={styles.App}>
            <Header className={styles.Header} />
            <main className={styles.Main}>
                <Sidebar className={[styles.Sidebar, sidebarStatus?styles.SidebarShow:styles.SidebarHide].join(' ')} onClick={handelClick}>
                    {
                        !sidebarStatus ? 
                        <div className={styles.SidebarShownerCtn}>
                            <div className={styles.SidebarShowner} onClick={handelClick}>
                                
                            </div>
                        </div> : <></>
                    }
                </Sidebar>
                <Content className={[styles.Content, sidebarStatus?styles.ContentCollapse:styles.ContentExpand].join(' ')}>{children}</Content>
                {sidebarStatus && window.innerWidth < LAPTOP_SCREEN_SIZE ? <div className={styles.Overlay} onClick={handelClick}></div> : <></>}
            </main>
            <Footer className={styles.Footer} />
        </div>
    );
}