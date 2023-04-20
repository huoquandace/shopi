import styles from './Sidebar.module.scss';

export default function Sidebar({children, className, onClick}) {
    return (
        <div className={[styles.Sidebar, className].join(' ')}>
            <ul className={styles.SidebarMenu}>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
                <li className={styles.SidebarMenuItem}>Lorem ipsum dolor.</li>
            </ul>
            <div className={[styles.SidebarHider].join(' ')} onClick={onClick}>
                <ul className={''}>
                    <li className={''}>Close</li>
                </ul>
            </div>
            {children}
        </div>
    );
}