import React from 'react';
import axios from 'axios';
import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { createEvent } from '../actions/event-creation';
import { FormField, BackDesign } from '../styles/shared/FormField';
import { imgUrl, preset } from '../config';
import Layout from './Layout';

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
      <Layout>
        <BackDesign>
          <FormField onSubmit={formik.handleSubmit}>
            <h1>Tell us about your event</h1>
            <label>Title</label>
            <Field type='text' name='title' placeholder='Short event title' />
            <label>Description</label>
            <Field
              type='text'
              name='desc'
              placeholder='What is your event about?'
            />
            <label>Event Banner/Image</label>
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
            <label>Location</label>
            <Field type='text' name='location' placeholder='Event location' />
            <label>Start Date</label>
            <Field type='date' name='start_date' placeholder='Start' />
            <label>End Date</label>
            <Field type='date' name='end_date' placeholder='End' />
            <label>Number of Attendees</label>
            <Field
              type='number'
              name='capacity'
              placeholder='No of attendees'
            />
            <button type='submit' disabled={props.isLoading}>
              {props.loading ? <ClipLoader /> : 'Save and Continue'}
            </button>
          </FormField>
        </BackDesign>
      </Layout>
    )}
  </Formik>
);

const mapStateToProps = ({ createEventReducer }) => ({
  loading: createEventReducer.loading,
  error: createEventReducer.error
});

export default connect(mapStateToProps, { createEvent })(EventForm);
