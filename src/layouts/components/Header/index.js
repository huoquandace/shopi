import './style.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <Link>
                    <img className='logo-img' src="./logo.png" alt="logo"/>
                </Link>
                <Link>
                    <div className='logo-title'>Shopi</div>
                </Link>
                <div className="devide-line"></div>
            </div>
            <div className='search'>
                <input type='search' placeholder='search' name='search' />
            </div>
            <div className='action'>
                action
            </div>
        </header>
    );
}