import React from 'react';
import axios from 'axios';
import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { createEvent } from '../actions/event-creation';
import { FormField } from '../styles/shared/FormField';
import { Button } from '../styles/shared/Button';
import { imgUrl, preset } from '../config';

const EventForm = props => (
  <Formik
    initialValues={{
      type: 'free',
      title: '',
      desc: '',
      img: '',
      creator: '',
      location: '',
      start_date: '',
      end_date: '',
      capacity: ''
    }}
    onSubmit={values => {
      props.createEvent(values).then(res => {
        if (res) {
          props.history.push(`/agenda`);
        }
      });
    }}
  >
    {formik => (
      <FormField onSubmit={formik.handleSubmit}>
        <h1>Tell us about your event</h1>
        <Field type='text' name='title' placeholder='Short event title' />
        <Field
          type='text'
          name='desc'
          placeholder='What is your event about?'
        />
        <input
          name='img'
          type='file'
          accept='image/*'
          onChange={event => {
            const file = event.currentTarget.files[0];
            console.log(file);
            const formData = new FormData();
            const config = {
              headers: { 'content-type': 'multipart/form-data' }
            };
            formData.append('file', file);
            formData.append('upload_preset', preset);
            console.log(preset);
            axios.post(imgUrl, formData, config).then(data => {
              console.log(data.data.secure_url);
              formik.setFieldValue('img', data.data.secure_url);
            });
          }}
        />
        <Field type='text' name='location' placeholder='Event location' />
        <Field type='text' name='start_date' placeholder='Start' />
        <Field type='text' name='end_date' placeholder='End' />
        <Field type='text' name='capacity' placeholder='No of attendees' />
        <Button type='submit' disabled={props.isLoading}>
          {props.loading ? <ClipLoader /> : 'Save and Continue'}
        </Button>
      </FormField>
    )}
  </Formik>
);

const mapStateToProps = ({ createEventReducer }) => ({
  loading: createEventReducer.loading,
  error: createEventReducer.error
});

export default connect(mapStateToProps, { createEvent })(EventForm);
