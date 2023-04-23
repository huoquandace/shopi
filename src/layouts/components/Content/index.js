import styles from './Content.module.scss';

export default function Content({className, children}) {
    return (
        <div className={[styles.Content, className].join(' ')}>
            <div className={[styles.Container, className].join(' ')}>
                {children}
            </div>
        </div>
    );
}