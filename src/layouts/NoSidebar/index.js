import styles from "./NoSidebar.module.scss"

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function NoSidebar({ children }) {
    return (
        <div className={styles.App}>
            <Header className={styles.Header} />
            <main className={styles.Main}>
                <Content className={[styles.Content].join(' ')}>{children}</Content>
            </main>
            <Footer className={styles.Footer} />
        </div>
    );
}

export default NoSidebar;