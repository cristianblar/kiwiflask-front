import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <Link href="/">
        <a>
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
            <a>
              <li>First implementation</li>
            </a>
          </Link>
          <Link href="/source-code">
            <a>
              <li>Source code</li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
