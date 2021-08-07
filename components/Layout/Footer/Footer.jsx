import { FaBriefcase, FaPaperclip, FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.mainContainer}>
      <h4>Want to see more of my work?</h4>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.cristianblar.dev/"
              target="_blank"
              aria-label="Web portfolio"
              rel="noreferrer external"
            >
              <FaBriefcase />
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/cristianblandon/Full-Stack-Developer-96864fd3113547eaa38ab7e35d7a9551"
              target="_blank"
              aria-label="Curriculum vitae"
              rel="noreferrer external"
            >
              <FaPaperclip />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cristianblar"
              target="_blank"
              aria-label="GitHub Profile"
              rel="noreferrer external"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristianblandon/"
              target="_blank"
              aria-label="LinkedIn Profile"
              rel="noreferrer external"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
