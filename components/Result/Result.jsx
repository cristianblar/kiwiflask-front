function Result({ fetchedData }) {
  return (
    <section>
      <h2>And the result is...</h2>
      <ul>
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
