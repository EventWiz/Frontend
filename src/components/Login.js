import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';
import { logIn } from '../actions/auth';
import { Button } from '../styles/shared/Button';
import { Form } from '../styles/shared/Form';
import { Input } from '../styles/shared/Input';
import { Link } from 'react-router-dom';

const Login = props => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Address Required'),
      password: Yup.string().required('Invalid Password'),
    }),
    onSubmit: values => {
      props.logIn(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Log in</h1>
      {props.error && <p>{props.error}</p>}
      {props.history.location.state?.message && (
        <p>{props.history.location.state.message}</p>
      )}
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
        {props.loading ? <ClipLoader /> : 'Login'}
      </Button>
      <p>
        Don't have an account? <Link to="/signup">Register here</Link>
      </p>
    </Form>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  loading: authReducer.loading,
  error: authReducer.error,
});

export default connect(mapStateToProps, { logIn })(Login);
