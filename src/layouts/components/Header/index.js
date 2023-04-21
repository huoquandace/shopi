import styles from './Header.module.scss';

export default function Header({className}) {
    return (
        <header className={[styles.Header, className].join(' ')}>
            <div className={styles.Logo}>
                <img src='./logo.png' alt='logo'/>
                <span>Shopi</span>
                <div className={styles.DivideLine}></div>
            </div>
            <div className={styles.Region}>Region</div>
            <div className={styles.Language}>Language</div>
            <div className={styles.Search}>
                <form>
                    <input type='text' />
                    <div className={styles.SubmitBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                    </div>
                </form>
            </div>
            <div className={styles.Action}>
                <button>123123</button>
            </div>
        </header>
    );
}