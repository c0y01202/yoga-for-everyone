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






  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addClass({variables: {classText: classFormData.classText, testText: classFormData.testText}});

      // clear form value
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Schedule a Class</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='classText'>Class:</Form.Label>
          <Form.Select className="form-input col-9 col-md-9" name="classText" onChange={handleInputChange} value={classFormData.classText} aria-label="Default select example">
            <option>Select A Class</option>
            <option value="Aerial-With-Claudia">Aerial Yoga With Claudia</option>
            <option value="Ashtanga-With-John">Ashtanga with John</option>
            <option value="Vinyasa-With-Veronica">Vinyasa with Veronica</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='testText'>Time:</Form.Label>
          <Form.Select className="form-input col-9 col-md-9" name="testText" onChange={handleInputChange} value={classFormData.testText} aria-label="Default select example">
            <option>Select A Time</option>
            <option value="10am-Tue-Thu">10am - Tue/Thu</option>
            <option value="10am-Mon-Wed">10am - Mon/Wed</option>
            <option value="6pm-Tue-Thu">6pm - Tue/Thu</option>
            <option value="6pm-Mon-Wed">6pm - Mon/Wed</option>
          </Form.Select>
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
