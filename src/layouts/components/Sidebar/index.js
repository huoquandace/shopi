import styles from './Sidebar.module.scss';

export default function Sidebar({children, className}) {
    return (
        <div className={[styles.Sidebar, className].join(' ')}>
            <div className={[].join(' ')}>
                
            </div>
            <div className={[].join(' ')}>

            </div>
            {children}
        </div>
    );
}