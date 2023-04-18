import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header({className}) {
    return (
        <header className={[styles.Header, className].join(' ')}>

        </header>
    );
}