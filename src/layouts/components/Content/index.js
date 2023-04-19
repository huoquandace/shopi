import styles from './Content.module.scss';

export default function Content({className}) {
    return (
        <div className={[styles.Content, className].join(' ')}>
            
        </div>
    );
}