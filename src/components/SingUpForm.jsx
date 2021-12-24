import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const SingUpForm = () => {
  const [formValues, setFormValues] = useState(null);
  //   const [inputform, setInputForm] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  //   const changeHandler = (e) => {
  //     setInputForm({ ...inputform, [e.target.name]: e.target.value });
  //     console.log(inputform);
  //   };

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("phone number is required")
      .matches(/^[0-9]{11}$/, "phone number is not valid"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .required("Password Confirm is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/user/1")
      .then((res) => setFormValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    gender: "",
  };

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit: (values) => console.log(values),
    // validate,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  console.log(formik.touched);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps("name")}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // onBlur={formik.handleBlur}
            // onChange={changeHandler}
            // value={inputform.name}
            name="name"
          />
          {formik.errors.name && formik.touched.password && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            // onChange={formik.handleChange}
            // value={formik.values.email}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("email")}
            // onChange={changeHandler}
            // value={inputform.email}
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="phoneNumber">phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            {...formik.getFieldProps("phoneNumber")}
            name="phoneNumber"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="error">{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            // onChange={formik.handleChange}
            // value={formik.values.password}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("password")}
            // onChange={changeHandler}
            // value={inputform.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <div className="passwordConfirm formControl">
          <label htmlFor="passwordConfirm">password Confirm</label>
          <input
            id="passwordConfirm"
            type="text"
            {...formik.getFieldProps("passwordConfirm")}
            name="passwordConfirm"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div>

        <div className="formControl">
          <div className="radio">
            <div className="male">
              <label htmlFor="0">male</label>
              <input
                type="radio"
                id="0"
                value="0"
                onChange={formik.handleChange}
                name="gender"
                checked={formik.values.gender === "0"}
              />
            </div>
            <div className="female">
              <label htmlFor="1">female</label>
              <input
                type="radio"
                id="1"
                value="1"
                onChange={formik.handleChange}
                name="gender"
                checked={formik.values.gender === "1"}
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={!formik.isValid}>
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
