import { Form as AntdForm, Button, Input, Space } from "antd";
import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./SignUpPage.css";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signupValidation = Yup.object({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const AnimatedHelperBox = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: -40, x: -15 }}
    transition={{ duration: 0.3 }}
    style={{
      backgroundColor: "#f8d7da",
      color: "#721c24",
      padding: "8px 15px",
      borderRadius: "4px",
      position: "absolute",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 10,
      whiteSpace: "nowrap",
      right: "calc(100% - 1px)",
      transform: "translateX(-100%)",
    }}
  >
    {message}
    <div
      style={{
        content: "''",
        position: "absolute",
        top: "50%",
        right: "-84px",
        transform: "translateY(-50%)",
        borderWidth: "9px 43px",
        borderStyle: "solid",
        borderColor: "transparent transparent transparent #f8d7da",
      }}
    />
  </motion.div>
);

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmitValues = (values) => {
    console.log("Thank you for creating account on RK shopping");
    console.log("First Name: ", values.firstname);
    console.log("Last Name: ", values.lastname);
    console.log("Email: ", values.email);
    console.log("Password: ", values.password);
    const message = `
    Thank you for creating an account on RK shopping.
  
    First Name: ${values.firstname}
    Last Name: ${values.lastname}
    Email: ${values.email}
    Password: ${values.password}
  `;

    alert(message);
    navigate("/mainlayout");
  };

  const handleloginclick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="signup-container">
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={handleSubmitValues}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Space direction="vertical" size={10}>
                <div className="greeting">Please Fill the Details</div>
                <AntdForm.Item
                  validateStatus={
                    errors.firstname && touched.firstname ? "error" : ""
                  }
                  help={
                    errors.firstname && touched.firstname ? (
                      <AnimatedHelperBox
                        message={errors.firstname}
                        isVisible={true}
                      />
                    ) : null
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span
                    style={{
                      margin: "8px",
                      fontSize: "large",
                      display: "block",
                    }}
                  >
                    First Name:
                  </span>
                  <Field
                    prefix={""}
                    as={Input}
                    size="large"
                    name="firstname"
                    placeholder="Please enter first name"
                    value={values.firstname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="firstname"
                  />
                </AntdForm.Item>
                <AntdForm.Item
                  validateStatus={
                    errors.lastname && touched.lastname ? "error" : ""
                  }
                  help={
                    errors.lastname && touched.lastname ? (
                      <AnimatedHelperBox message={errors.lastname} />
                    ) : (
                      ""
                    )
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span
                    style={{
                      margin: "8px",
                      fontSize: "large",
                      display: "block",
                    }}
                  >
                    Last Name:
                  </span>
                  <Field
                    prefix={""}
                    as={Input}
                    size="large"
                    name="lastname"
                    placeholder="Please enter last name"
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="lastname"
                  />
                </AntdForm.Item>
                <AntdForm.Item
                  validateStatus={errors.email && touched.email ? "error" : ""}
                  help={
                    errors.email && touched.email ? (
                      <AnimatedHelperBox message={errors.email} />
                    ) : (
                      ""
                    )
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span
                    style={{
                      margin: "8px",
                      fontSize: "large",
                      display: "block",
                    }}
                  >
                    Email:
                  </span>
                  <Field
                    prefix={""}
                    as={Input}
                    size="large"
                    name="email"
                    placeholder="Please enter email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </AntdForm.Item>
                <AntdForm.Item
                  validateStatus={
                    errors.password && touched.password ? "error" : ""
                  }
                  help={
                    errors.password && touched.password ? (
                      <AnimatedHelperBox message={errors.password} />
                    ) : (
                      ""
                    )
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span
                    style={{
                      margin: "8px",
                      fontSize: "large",
                      display: "block",
                    }}
                  >
                    Password:
                  </span>
                  <Field
                    prefix={""}
                    as={Input.Password}
                    size="large"
                    name="password"
                    placeholder="Please enter password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="password"
                  />
                </AntdForm.Item>
                <AntdForm.Item
                  validateStatus={
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : ""
                  }
                  help={
                    errors.confirmPassword && touched.confirmPassword ? (
                      <AnimatedHelperBox message={errors.confirmPassword} />
                    ) : (
                      ""
                    )
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span
                    style={{
                      margin: "8px",
                      fontSize: "large",
                      display: "block",
                    }}
                  >
                    Confirm Password:
                  </span>
                  <Field
                    prefix={""}
                    as={Input.Password}
                    size="large"
                    name="confirmPassword"
                    placeholder="Please enter confirm password"
                    value={values.confirmPassword}
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="confirmpassword"
                  />
                </AntdForm.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", margin: "15px 0px 0px 0px" }}
                  size="large"
                >
                  create an account? Sign Up
                </Button>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>Already have Account?</span>
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "5px",
                      marginTop: "0px",
                    }}
                    onClick={handleloginclick}
                  >
                    Log in
                  </span>
                </div>
              </Space>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
