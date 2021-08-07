import { useState, useRef, Fragment } from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.css';

import MainForm from '@components/MainForm/MainForm';
import Result from '@components/Result/Result';
import Loading from '@components/Loading/Loading';

const API_URL = 'https://kiwiflask-api.herokuapp.com/api/check-array';

export default function Home() {
  const [textPreference, setTextPreference] = useState(false);
  const [textError, setTextError] = useState(false);
  const [postStatus, setPostStatus] = useState({
    callMade: false,
    loading: false,
    error: false,
  });
  const [fetchedData, setFetchedData] = useState(null);

  const mainFormRef = useRef(null);

  const handleTextPreference = function () {
    setTextPreference(!textPreference);
  };

  const handleTextError = function () {
    setTextError(false);
  };

  const fetchData = function (arrayToSend) {
    setPostStatus({
      callMade: true,
      loading: true,
      error: false,
    });
    setFetchedData(null);
    axios
      .post(API_URL, { array: arrayToSend })
      .then(response => {
        if (response.data.error || response.status === 500) throw Error();
        setFetchedData(response.data.result);
        setPostStatus({
          callMade: true,
          loading: false,
          error: false,
        });
      })
      .catch(err => {
        console.log(err);
        setPostStatus({
          callMade: true,
          loading: false,
          error: true,
        });
      });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(mainFormRef.current);
    if (!textPreference) {
      const arrayLength = formData.get('arrayLength');
      const arrayToSend = [];
      for (let i = 0; i < arrayLength; i++) {
        arrayToSend.push(Number(formData.get(`num${i}`)));
      }
      fetchData(arrayToSend);
    } else {
      let enteredArray = formData.get('text-array').toString();
      enteredArray = enteredArray.trim();
      if (!enteredArray.match(/^\[\s*(?:\d+,\s?)+\s?\d+\s*\]$/im))
        setTextError(true);
      else {
        enteredArray = enteredArray.replaceAll(' ', '');
        enteredArray = enteredArray
          .substring(1, enteredArray.length - 1)
          .split(',');
        enteredArray = enteredArray
          .filter(ch => Number(ch))
          .map(num => Number(num));
        fetchData(enteredArray);
      }
    }
    e.target.reset();
  };

  return (
    <Fragment>
      <main className={styles.mainContainer}>
        <MainForm
          formRef={mainFormRef}
          textError={textError}
          handleTextError={handleTextError}
          handleSubmit={handleSubmit}
          handleTextPreference={{
            textPreference,
            textPreferenceChange: handleTextPreference,
          }}
        />
        {!postStatus.callMade ? null : postStatus.loading ? (
          <Loading />
        ) : (
          <Result fetchedData={fetchedData} />
        )}
        {postStatus.error && (
          <span className={styles.errorText}>
            Something went wrong! Please, try again!
          </span>
        )}
      </main>
      <section className={styles.explanationContainer}>
        <h3>Algorithm Explanation 📖</h3>
        <ol>
          <li>
            1️⃣ The app receives an array with at least three positive integers.
          </li>
          <li>
            2️⃣ The idea is that you enter an array with a mirror! A number at
            some part of the array that separates it.
          </li>
          <li>
            3️⃣ Mirror&apos;s left side must sum the same amount as mirror&apos;s
            right side.
          </li>
          <li>
            4️⃣ The computer will establish two pointers, one for the left side,
            and the other for the right side.
          </li>
          <li>
            5️⃣ Each pointer will advance to the center of the array, taking into
            consideration the current sum of each side until each pointer.
          </li>
          <li>
            6️⃣ The algorithm will iterate <code>n - 3</code> times, and{' '}
            <code>n</code> is the length of your array.
          </li>
          <li>
            7️⃣ Why <code>n - 3?</code> Because both pointers are initialized
            before the loop begins... And, do you remember the mirror? Well,
            that&apos;s the third.
          </li>
          <li>
            8️⃣ Big O is a notation to measure an algorithm&apos;s performance,
            taking into consideration space and time consumption.
          </li>
          <li>
            9️⃣ As you read, this algorithm is going to iterate{' '}
            <code>n - 3</code> times... However, for big arrays, the{' '}
            <code>3</code> doesn&apos;t produce a significant difference, so it
            is discarded.
          </li>
          <li>
            🔟 But... What about the space? Well, the algorithm only uses a few
            variables. Doesn&apos;t matter how long your array is, the algorithm
            will use the same space to reach the solution.
          </li>
          <li>
            🌟 Concluding... the algorithm of this web app performs with a time
            Big O of O(n) regarding time complexity... And O(1) regarding space
            complexity. It&apos;s awesome! Isn&apos;t it?
          </li>
          <li></li>
        </ol>
      </section>
    </Fragment>
  );
}
