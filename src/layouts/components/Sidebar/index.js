import styles from './Sidebar.module.scss';

export default function Sidebar({className}) {
    return (
        <div className={[styles.Sidebar, className].join(' ')}>
            
        </div>
    );
}