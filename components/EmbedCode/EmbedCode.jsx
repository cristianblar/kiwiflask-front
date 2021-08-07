import styles from './EmbedCode.module.css';

function EmbedCode({ stringCode }) {
  return <pre className={styles.codeContainer}>{stringCode}</pre>;
}

export default EmbedCode;
