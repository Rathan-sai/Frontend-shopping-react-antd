import { LockOutlined, MailOutlined } from "@ant-design/icons";
import {
  Form as AntdForm,
  Button,
  Checkbox,
  Divider,
  Input,
  Space,
} from "antd";
import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./LoginPage.css";

const initialValues = {
  email: "",
  password: "",
};

const loginValidation = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter valid email"),
  password: Yup.string().required("Please enter valid password"),
});

const AnimatedHelperBox = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: -40, x: -130 }}
    transition={{ duration: 0.3 }}
    style={{
      backgroundColor: "#f8d7da",
      color: "#721c24",
      padding: "8px 15px",
      borderRadius: "4px",
      position: "absolute",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 10,
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

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmitValues = (values) => {
    console.log(values);
    if (
      values.email === "shashikant@ipsaa.in" &&
      values.password === "Computers@9876"
    ) {
      alert("login successfully!");
      navigate("/mainlayout");
    } else {
      alert("Invalid user. please enter valid email and password");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="login-container">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmitValues}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            isValid,
          }) => (
            <Form>
              <Space direction="vertical" size={20}>
                <div className="greeting">Welcome to KR shopping</div>
                <div className="login-greeting">
                  Please Enter Credentials to Login
                </div>
                {/* Login box */}
                <AntdForm.Item
                  validateStatus={errors.email && touched.email ? "error" : ""}
                  help={
                    touched.email && errors.email ? (
                      <AnimatedHelperBox message={errors.email} />
                    ) : (
                      ""
                    )
                  }
                  style={{ marginBottom: "0px" }}
                >
                  <span style={{ padding: "8px" }}>Email:</span>

                  <Field
                    prefix={<MailOutlined style={{ paddingRight: "10px" }} />}
                    as={Input}
                    size="large"
                    name="email"
                    placeholder="Login with email or Number"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </AntdForm.Item>

                {/* Password box */}
                <AntdForm.Item
                  validateStatus={
                    errors.password && touched.password ? "error" : ""
                  }
                  help={touched.password && errors.password}
                  style={{ marginBottom: "0px" }}
                >
                  <span style={{ padding: "8px" }}>Password:</span>
                  <Field
                    prefix={<LockOutlined style={{ paddingRight: "10px" }} />}
                    as={Input.Password}
                    size="large"
                    name="password"
                    placeholder="Enter password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </AntdForm.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    <Checkbox></Checkbox> Remember Me
                  </span>
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </span>
                </div>

                {/* Login Button */}
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  size="large"
                >
                  {/* {isSubmitting ? (
                    <Spin size={24} sx={{ color: "inherit" }} />
                  ) : (
                    "Login"
                  )} */}
                  Log in
                </Button>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>Not a member?</span>
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    onClick={handleSignUpClick}
                  >
                    sign up
                  </span>
                </div>
                <Divider style={{ color: "black" }}>OR</Divider>
              </Space>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
