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
                                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-round</title> <path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM4 16q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM8 16q0-0.832 0.576-1.408t1.44-0.576h5.984v-2.016q0-0.608 0.352-1.088t0.896-0.736 1.152-0.128 1.024 0.544l4 4q0.576 0.576 0.576 1.408t-0.576 1.408l-4 4q-0.448 0.448-1.024 0.576t-1.152-0.128q-0.576-0.224-0.896-0.736t-0.352-1.12v-1.984h-5.984q-0.832 0-1.44-0.576t-0.576-1.44z"></path> </g></svg>
                            </div>
                        </div> : <></>
                    }
                </Sidebar>
                <Content className={[styles.Content, sidebarStatus?styles.ContentCollapse:styles.ContentExpand].join(' ')}>{children}</Content>
                {console.log(children)}
                {sidebarStatus && window.innerWidth < LAPTOP_SCREEN_SIZE ? <div className={styles.Overlay} onClick={handelClick}></div> : <></>}
            </main>
            <Footer className={styles.Footer} />
        </div>
    );
}