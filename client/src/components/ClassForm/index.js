import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const ClassForm = () => {
  const [classText, setText] = useState('');
  const [timeChoice, setTimeChoice] = useState('');
  const [classChoice, setClassChoice] = useState('');


  const [addClass, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addClass } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, classes: [...me.classes, addClass] } },
        });
      } catch (e) {
        console.warn("First class booking by user!")
      }

      // update class array's cache
      const { classes } = cache.readQuery({ query: QUERY_THOUGHTS });
      cache.writeQuery({
        query: QUERY_THOUGHTS,
        data: { classes: [addClass, ...classes] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };

  const handleTimeChange = (event) => {
      setTimeChoice(event.target.value);
  };

  const handleClassChange = (event) => {
      setClassChoice(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addClass({
        variables: { classText, timeChoice, classChoice },
      });

      // clear form value
      setText('');
      setTimeChoice('');
      setClassChoice('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <select onChange={handleClassChange} className="form-input col-12 col-md-9" name="classList" id="classList">
          <option>Choose a class</option>
          <option value="classOne">Aerial Yoga With Claudia</option>
          <option value="classTwo">Ashtanga with John</option>
          <option value="classThree">Vinyasa with Veronica</option>
        </select>
        <select onChange={handleTimeChange} className="form-input col-12 col-md-9" name="timeList" id="timeList">
          <option>Choose a time</option>
          <option value="classOne">10am</option>
          <option value="classTwo">2pm</option>
          <option value="classThree">7pm</option>
        </select>
                {/* <textarea
          placeholder="Class"
          id="class"
          value={classChoice}
          className="form-input col-12 col-md-9"
          onChange={handleClassChange}
        ></textarea>
                <textarea
          placeholder="Time"
          id="time"
          value={timeChoice}
          className="form-input col-12 col-md-9"
          onChange={handleTimeChange}
        ></textarea> */}
        <textarea
          placeholder="Comments"
          id="comments"
          value={classText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-9" type="submit">
          Book my class!
        </button>
      </form>
    </div>
  );
};

export default ClassForm;
