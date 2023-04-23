import styles from './TopMenu.module.scss';

export default function TopMenu({className, children}) {
    return (
        <div className={[styles.TopMenu, className].join(' ')}>
            {children}
        </div>
    );
}