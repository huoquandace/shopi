import styles from './Footer.module.scss';

export default function Footer({className}) {
    return (
        <footer className={[styles.Footer, className].join(' ')}></footer>
    );
}