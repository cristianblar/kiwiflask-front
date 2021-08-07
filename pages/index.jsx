import { useState, useRef } from 'react';

import styles from '../styles/Home.module.css';

import MainForm from '@components/MainForm/MainForm';
import Result from '@components/Result/Result';

export default function Home() {
  const [textPreference, setTextPreference] = useState(false);
  const [textError, setTextError] = useState(false);

  const mainFormRef = useRef(null);

  const handleTextPreference = function () {
    setTextPreference(!textPreference);
  };

  const handleTextError = function () {
    setTextError(false);
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
      console.log(arrayToSend);
    } else {
      let enteredArray = formData.get('text-array');
      if (!enteredArray.match(/^\[(?:\d+,\s?)+\s?\d\]$/im)) setTextError(true);
      else {
        enteredArray = enteredArray.replaceAll(' ', '');
        enteredArray = enteredArray.split('');
        enteredArray = enteredArray
          .filter(ch => Number(ch))
          .map(num => Number(num));
        console.log(enteredArray);
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
      <Result />
    </main>
  );
}
