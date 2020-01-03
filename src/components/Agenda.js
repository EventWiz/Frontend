import React from 'react';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { createSession } from '../actions/sessions';
import { Formik, Field, FieldArray } from 'formik';
import { FormField } from '../styles/shared/FormField';
import { Button } from '../styles/shared/Button';

const Agenda = props => (
  <Formik
    initialValues={{
      agenda: [
        {
          event_id: props.event_id,
          topic: '',
          speaker: '',
          venue: '',
          start_time: '',
          end_time: '',
          date: ''
        }
      ]
    }}
    onSubmit={values => {
      props.createSession(values).then(res => {
        if (res) {
          props.history.push(`/events/${props.event_id}`);
        }
      });
    }}
    render={({ values, handleSubmit }) => (
      <FieldArray
        name='agenda'
        render={arrayHelpers => (
          <FormField onSubmit={handleSubmit}>
            <h1>Create Agenda</h1>
            {values.agenda && values.agenda.length > 0 ? (
              values.agenda.map((agenda, index) => (
                <div key={index}>
                  <Field
                    name={`agenda.${index}.topic`}
                    placeholder='Session topic'
                  />
                  <Field
                    name={`agenda.${index}.speaker`}
                    placeholder='Speaker name'
                  />
                  <Field name={`agenda.${index}.venue`} placeholder='Venue' />
                  <Field
                    name={`agenda.${index}.start_time`}
                    placeholder='Start time'
                  />
                  <Field
                    name={`agenda.${index}.end_time`}
                    placeholder='End time'
                  />
                  <Field name={`agenda.${index}.date`} placeholder='Date' />
                  <div className='icon'>
                    <button
                      type='button'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Remove
                    </button>
                    <button
                      type='button'
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <button
                className='add'
                type='button'
                onClick={() => arrayHelpers.push('')}
              >
                Add a Session
              </button>
            )}
            <Button type='submit' disabled={props.isLoading}>
              {props.loading ? <ClipLoader /> : 'Save'}
            </Button>
          </FormField>
        )}
      />
    )}
  />
);

const mapStateToProps = ({ sessionReducer }) => ({
  loading: sessionReducer.loading,
  error: sessionReducer.error,
  event_id: sessionReducer.event_id
});
export default connect(mapStateToProps, { createSession })(Agenda);
