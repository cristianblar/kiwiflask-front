import styles from './Result.module.css';

function Result({ fetchedData }) {
  return (
    <section className={styles.mainContainer}>
      <h2>And the result is...</h2>
      <ul className={styles.dataContainer}>
        <li>
          <span>Index position of the mirror (pivot): </span>
          {fetchedData.index}
        </li>
        <li>
          <span>Value of the mirror (pivot): </span>
          {fetchedData.value}
        </li>
        <li>
          <span>The sum of each side: </span>
          {fetchedData.sum}
        </li>
      </ul>
    </section>
  );
}

export default Result;
