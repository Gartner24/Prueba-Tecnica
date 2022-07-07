import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerAsyncAction } from "../../app/actions/login.action";

// ------------ Yup Validation ------------ //

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
  passwordConfirm: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  name: Yup.string()
    .required("Please Enter your name")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters"),
  phone: Yup.string()
    .required("Please Enter your phone")
    .min(10, "Phone must be at least 10 characters")
    .max(10, "Phone must be less than 10 characters"),
});

// ------------ End Yup Validation ------------ //

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="auth">
        <div className="p-4 box">
          <h2 className="mb-3">Signup</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirm: "",
              name: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(registerAsyncAction(values.email, values.password, values.name, values.phone));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field
                  className="mb-3 form-control"
                  type="name"
                  name="name"
                  placeholder="Name"
                />
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                <Field
                  className="mb-3 form-control"
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
        
                {errors.passwordConfirm && touched.passwordConfirm ? (
                  <div>{errors.passwordConfirm}</div>
                ) : null}
                <Field
                  className="mb-3 form-control"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm your Password"
                />
        
                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Sign Up
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
