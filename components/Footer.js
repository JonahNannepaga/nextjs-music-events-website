import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Copyright from './Copyright';
export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <p>
                    <Link href='/about'>
                    About this project
                    </Link>
                </p>
                <p>
                    <Link href='https://jonahsportfolio.vercel.app/'>
                        About me 
                    </Link>
                </p>
            </div>
            <Copyright/>
        </footer>
    )
}
