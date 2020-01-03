import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FormField } from '../styles/shared/FormField';

const Agenda = () => {
  return (
      <Formik
        initialValues={{ agenda: [] }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <FieldArray
            name='agenda'
            render={arrayHelpers => (
              <FormField>
                <h1>Create Agenda</h1>
                {values.agenda && values.agenda.length > 0 ? (
                  values.agenda.map((agenda, index) => (
                    <div key={index}>
                      <Field
                        name={`topic.${index}`}
                        placeholder='Session topic'
                      />
                      <Field
                        name={`speaker.${index}`}
                        placeholder='Speaker name'
                      />
                      <Field name={`venue.${index}`} placeholder='Venue' />
                      <Field
                        name={`start_time.${index}`}
                        placeholder='Start time'
                      />
                      <Field
                        name={`end_time.${index}`}
                        placeholder='End time'
                      />
                      <Field name={`date.${index}`} placeholder='Date' />
                      <div className='icon'>
                        <button
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                        <button
                          type='button'
                          onClick={() => arrayHelpers.insert(index, '')}
                        >
                          +
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
                <div className='next'>
                  <Link to='/preview' className='next'>
                    Save and Continue
                  </Link>
                </div>
              </FormField>
            )}
          />
        )}
      />
  );
};

export default Agenda;
