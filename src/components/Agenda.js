import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';

const Agenda = () => {
  return (
    <div>
      <h1>Create Agenda</h1>
      <Formik
        initialValues={{ agenda: [] }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <Form>
            <FieldArray
              name='agenda'
              render={arrayHelpers => (
                <div>
                  {values.agenda && values.agenda.length > 0 ? (
                    values.agenda.map((agenda, index) => (
                      <div key={index}>
                        <Field name={`topic.${index}`} />
                        <Field name={`speaker.${index}`} />
                        <Field name={`venue.${index}`} />
                        <Field name={`start_time.${index}`} />
                        <Field name={`end_time.${index}`} />
                        <Field name={`date.${index}`} />
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
                    ))
                  ) : (
                    <button type='button' onClick={() => arrayHelpers.push('')}>
                      Add a Session
                    </button>
                  )}
                  <div>
                    <Link to='/preview' className='next'>
                      Next
                    </Link>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
};

export default Agenda;
