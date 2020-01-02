import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../styles/shared/Button';
import { Form } from '../styles/shared/Form';
import { Input } from '../styles/shared/Input';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Address Required'),
      password: Yup.string().required('Invalid Password')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Log in</h1>
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='Email'
      />
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}
      <Input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder='Password'
      />
      <Button type='submit'>Login</Button>
    </Form>
  );
};

export default Login;
