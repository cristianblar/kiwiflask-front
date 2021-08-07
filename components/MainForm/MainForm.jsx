import { useState, useRef } from 'react';

function MainForm({
  formRef,
  textError,
  handleTextError,
  handleSubmit,
  handleTextPreference: { textPreference, textPreferenceChange },
}) {
  const [arrayLength, setArrayLength] = useState(3);

  const arrayLengthRef = useRef(null);

  const handleArrayLength = function () {
    setArrayLength(Number(arrayLengthRef.current.value));
  };

  return (
    <section>
      <div>
        <label htmlFor="text-preference">
          I prefer to write the complete array in a text box
        </label>
        <input
          type="checkbox"
          name="textPreference"
          id="text-preference"
          onChange={textPreferenceChange}
          value={textPreference}
        />
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        {textPreference ? (
          <div>
            <input
              type="text"
              name="text-array"
              id="text-array"
              placeholder="[1, 2, 1]"
              onChange={handleTextError}
            />
            {textError && (
              <span>
                Please write a valid array (at least 3 positive integers)
              </span>
            )}
          </div>
        ) : (
          <div>
            <label htmlFor="length-slider">
              How many numbers does your list have?
            </label>
            <input
              ref={arrayLengthRef}
              type="range"
              name="arrayLength"
              id="length-slider"
              min={3}
              max={50}
              step={1}
              defaultValue={3}
              onChange={handleArrayLength}
            />
            <span>{arrayLength}</span>
            {[...Array(arrayLength)].map((pos, idx) => (
              <label key={`array_num_${idx}`} htmlFor={`array_num_${idx}`}>
                {`Pos. ${idx}`}
                <input
                  required
                  min={1}
                  type="number"
                  name={`num${idx}`}
                  id={`array_num_${idx}`}
                />
              </label>
            ))}
          </div>
        )}
        <input type="reset" value="Clean the numbers" />
        <button type="submit">Find the reflection!</button>
      </form>
    </section>
  );
}

export default MainForm;
