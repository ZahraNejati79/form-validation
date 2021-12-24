import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "../common/Input";
import RadioInput from "../common/RadioInput";

const SingUpForm = () => {
  const [formValues, setFormValues] = useState(null);
  const radioOptions = [
    { label: "Male", value: "0" },
    { label: "Female", value: "1" },
  ];

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

  console.log(formik.touched);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <Input label="Name" name="name" formik={formik} />
        <Input name="email" label="Email" formik={formik} type="email" />
        <Input name="phoneNumber" label="Phone Number" formik={formik} />
        <Input
          name="password"
          label="Password"
          formik={formik}
          type="password"
        />
        <Input
          name="passwordConfirm"
          label="password Confirm"
          formik={formik}
          type="password"
        />

        <RadioInput name="gender" formik={formik} radioOptions={radioOptions} />
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};

export default SingUpForm;
