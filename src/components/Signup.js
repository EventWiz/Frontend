import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';
import { signUp } from '../actions/auth';
import { Button } from '../styles/shared/Button';
import { Form } from '../styles/shared/Form';
import { Input } from '../styles/shared/Input';
import { Link } from 'react-router-dom';

const Signup = props => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 25 characters or less')
        .required('First Name is Required'),
      lastName: Yup.string()
        .max(20, 'Must be 25 characters or less')
        .required('Last Name is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Address Required'),
      password: Yup.string()
        .min(8, 'Password must be a minimum of 8 characters')
        .required('Password is Required'),
    }),
    onSubmit: values => {
      props.signUp(values).then(res => {
        if (res) {
          props.history.push('/login', {
            message:
              'Your Account have been created successfully, Please Login 😊',
          });
        }
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Create Account</h1>
      {props.error && <p>{props.error}</p>}
      {formik.touched.firstName && formik.errors.firstName ? (
        <p>{formik.errors.firstName}</p>
      ) : null}
      <Input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="First Name"
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p>{formik.errors.lastName}</p>
      ) : null}
      <Input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder="Last Name"
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Email"
      />
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
      />
      <Button type="submit" disabled={props.isLoading}>
        {props.loading ? <ClipLoader /> : 'Sign Up'}
      </Button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Form>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  loading: authReducer.loading,
  error: authReducer.error,
});

export default connect(mapStateToProps, { signUp })(Signup);
