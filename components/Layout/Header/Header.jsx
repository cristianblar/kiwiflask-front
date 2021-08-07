import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

function Header() {
  const router = useRouter();

  return (
    <header className={styles.mainContainer}>
      <Link href="/">
        <a className={router.pathname == '/' ? styles.activeLink : ''}>
          <div className={styles.logoContainer}>
            <Image
              alt="Reflection logo"
              src="/mirror.jpeg"
              width={76}
              height={50}
            />
            <h2>Reflect</h2>
          </div>
        </a>
      </Link>
      <nav>
        <ul>
          <Link href="/original-algorithm">
            <a
              className={
                router.pathname == '/original-algorithm'
                  ? styles.activeLink
                  : ''
              }
            >
              <li>First implementation</li>
            </a>
          </Link>
          <Link href="/source-code">
            <a
              className={
                router.pathname == '/source-code' ? styles.activeLink : ''
              }
            >
              <li>Source code</li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
