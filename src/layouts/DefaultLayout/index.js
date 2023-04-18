import { useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss'

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DefaultLayout({ children }) {

    const [sidebarStatus, setSidebarStatus] = useState(true)

    useEffect(() => {
        var lastScrollTop = 0;

        const handleScroll = event => {
            console.log(sidebarStatus);

            // collapseSidebarOnScrollToFooter
            var st = document.documentElement.scrollTop;
            if (st < lastScrollTop) {
                if (document.documentElement.scrollTop + window.innerHeight < document.documentElement.offsetHeight - 100) {
                    if (sidebarStatus) setSidebarStatus(true)
                }
            }
            else {
                if (document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 100) {
                    setSidebarStatus(false)
                }
            }
            lastScrollTop = st;

            // relativizeSidebarOnScrollToFooter
            var sidebar = document.getElementsByClassName(styles.Sidebar).item(0)
            var footer = document.getElementsByClassName(styles.Footer).item(0)
            if (document.documentElement.scrollTop + window.innerHeight >= footer.offsetTop) {
                sidebar.style.position = 'absolute';
                sidebar.style.top = 'auto';
            } else {
                sidebar.style.position = 'fixed';
                sidebar.style.top = `${getVar('--HeaderHeight')}rem`;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    function getVar(variable) {
        var value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
        for (var i = 0; i < value.length; i++) {
            if (!is_numeric(value.charAt(i))) {
                return parseInt(value.slice(0, -i - 1))
            }
        }
    };
    
    function is_numeric(str) {
        return /^\d+$/.test(str);

    }
    
    const handelClick = event => {
        console.log(sidebarStatus);
        setSidebarStatus(sidebarStatus ? false : true)
        console.log(sidebarStatus);
    }

    return (
        <div className={styles.App}>
            <Header className={styles.Header} />
            <main className={styles.Main} onClick={handelClick}>
                <Sidebar className={[styles.Sidebar, sidebarStatus?styles.SidebarShow:styles.SidebarHide].join(' ')} />
                <div className={[styles.Content, sidebarStatus?styles.ContentCollapse:styles.ContentExpand].join(' ')}>{children}</div>
            </main>
            <Footer className={styles.Footer} />
        </div>
    );
}