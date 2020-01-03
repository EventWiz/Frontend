// import React, { useState } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createEvent } from '../actions/event-creation';
// import { Formik, Form } from 'formik';
// import Agenda from './Agenda';
// import EventForm from './EventForm';

// const MainForm = props => {
//   const [submitted, setSubmit] = useState(false);
//   const handleSubmit = details => {
//     props.createEvent(details).then(res => {
//       if (res) {
//         props.history.push('/', {
//           message:
//             'Your Account have been created successfully, Please Login 😊'
//         });
//       }
//     });
//   };
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           title: '',
//           desc: '',
//           img: '',
//           creator: '',
//           location: '',
//           start_date: '',
//           end_date: '',
//           capacity: '',
//           agenda: []
//         }}
//         onSubmit={values => {
//           console.log(values)
//           handleSubmit(values)}}
//       >
//         <Switch>
//           {/* <Redirect from='/create-event' exact to='/create-event' /> */}
//           <Route path='/create-event' component={EventForm} />
//           <Route path='/agenda' component={Agenda} />
//         </Switch>
//       </Formik>
//     </div>
//   );
// };

// const mapStateToProps = ({ createEventReducer }) => ({
//   loading: createEventReducer.loading,
//   error: createEventReducer.error
// });

// export default connect(mapStateToProps, { createEvent })(MainForm);
