import { useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss'

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {

    const [sidebarStatus, setSidebarStatus] = useState(true);
    const [lastSidebarStatus, setLastSidebarStatus] = useState(true);

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
    
    
    
    
    
    const handelClick = event => {
        setSidebarStatus(!sidebarStatus)
        setLastSidebarStatus(!(lastSidebarStatus))
        // console.log(document.documentElement.scrollTop);
        // console.log(window.innerHeight);
        // console.log(document.documentElement.offsetHeight);
        // console.log(getVar('--FooterHeight'));
    }

    return (
        <div className={styles.App}>
            <Header className={styles.Header} />
            <main className={styles.Main} onClick={handelClick}>
                <Sidebar className={[styles.Sidebar, sidebarStatus?styles.SidebarShow:styles.SidebarHide].join(' ')} />
                <Content className={[styles.Content, sidebarStatus?styles.ContentCollapse:styles.ContentExpand].join(' ')}>{children}</Content>
            </main>
            <Footer className={styles.Footer} />
        </div>
    );
}