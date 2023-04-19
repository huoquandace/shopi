import styles from './Header.module.scss';

export default function Header({className}) {
    return (
        <header className={[styles.Header, className].join(' ')}></header>
    );
}