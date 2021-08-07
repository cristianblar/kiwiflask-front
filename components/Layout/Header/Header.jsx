import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Header() {
  const [currentPage, setCurrentPage] = useState('');
  useEffect(function () {
    setCurrentPage(location.pathname);
  }, []);

  return (
    <header>
      <Link href="/">
        <a className={currentPage === '/' ? 'activeLink' : ''}>
          <div>
            <Image
              alt="Reflection logo"
              src="/mirror.jpeg"
              width={121}
              height={80}
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
                currentPage === '/original-algorithm' ? 'activeLink' : ''
              }
            >
              <li>First implementation</li>
            </a>
          </Link>
          <Link href="/source-code">
            <a className={currentPage === '/source-code' ? 'activeLink' : ''}>
              <li>Source code</li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
