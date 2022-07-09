import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';
import { Form, Button, Alert } from 'react-bootstrap';

const ClassForm = () => {
  const [classFormData, setClassFormData] = useState({ classText: '', testText: '' });
  const [showAlert, setShowAlert] = useState(false);

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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassFormData({ ...classFormData, [name]: value });
  };







  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      await console.log(classFormData);
    } catch (err) {
      console.error(err);
    }

    // @NOTE: Old try block:
      //   try {
      //     await addClass({
      //       variables: { classText, testText },
      //     });

    setClassFormData({
      classText: '',
      testText: '',
    });
  };

  return (
    <div>
      <Form
        onSubmit={handleFormSubmit}
      >
        {/* <select onChange={handleClassChange} className="form-input col-12 col-md-9" name="classList" id="classList">
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
        </select> */}
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
                <Form.Group>
          <Form.Label htmlFor='classText'>Class:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your class'
            name='classText'
            onChange={handleInputChange}
            value={classFormData.classText}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='testText'>Time</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your time'
            name='testText'
            onChange={handleInputChange}
            value={classFormData.testText}
            required
          />
        </Form.Group>
        <Button
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ClassForm;
