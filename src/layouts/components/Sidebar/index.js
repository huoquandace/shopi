import styles from './Sidebar.module.scss';

export default function Sidebar({children, className}) {
    return (
        <div className={[styles.Sidebar, className].join(' ')}>
            <ul className={styles.SidebarMenu}>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className={[styles.SidebarHider].join(' ')}>
                <ul className={styles.SidebarMenu}>
                    <li className={styles.SidebarMenuItem}>Close</li>
                </ul>
            </div>
            {children}
        </div>
    );
}