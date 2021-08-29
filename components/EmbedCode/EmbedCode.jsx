import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/default.css';
import styles from './EmbedCode.module.css';

function EmbedCode({ stringCode }) {
  hljs.registerLanguage('python', python);

  useEffect(() => hljs.initHighlighting(), []);

  return (
    <pre className={`${styles.codeContainer} language-python`}>
      <code>{stringCode}</code>
    </pre>
    );
}

export default EmbedCode;
