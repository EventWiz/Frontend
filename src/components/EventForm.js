import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import { FormField } from '../styles/shared/FormField';

const EventForm = () => {
  return (
    <FormField>
      <h1>Tell us about your event</h1>
      <Field type='text' name='title' placeholder='Short event title' />
      <Field type='text' name='desc' placeholder='What is your event about?' />
      <Field type='text' name='location' placeholder='Event location' />
      <Field type='text' name='start_date' placeholder='' />
      <Field type='text' name='end_date' placeholder='' />
      <Field type='text' name='capacity' placeholder='No of attendees' />
      <Link to='/agenda' className='next'>
        Next
      </Link>
    </FormField>
  );
};

export default EventForm;
