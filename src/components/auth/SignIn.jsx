import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  FacebookLoginAction,
  GoogleLoginAction,
  LoginActionAsync,
} from "../../app/actions/login.action";

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
});

// ------------ End Yup Validation ------------ //

const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="auth">
        <div className="p-4 box">
          <h2 className="mb-3">Login</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(LoginActionAsync(values.email, values.password));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  className="mb-3 form-control"
                  name="email"
                  placeholder="Email address"
                />

                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <Field
                  className="mb-3 form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Log In
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <hr />
          <div>
            <Button
            onClick={() => dispatch(GoogleLoginAction())}
            >
              Google
            </Button>
            <Button
            onClick={() => dispatch(FacebookLoginAction())}
            >
              Facebook
            </Button>
          </div>
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
