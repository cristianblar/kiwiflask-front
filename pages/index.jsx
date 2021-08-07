import { useState, useRef } from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.css';

import MainForm from '@components/MainForm/MainForm';
import Result from '@components/Result/Result';

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
    <main>
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
        <span>Loading...</span>
      ) : (
        <Result fetchedData={fetchedData} />
      )}
      {postStatus.error && (
        <span>Something went wrong! Please, try again!</span>
      )}
    </main>
  );
}
