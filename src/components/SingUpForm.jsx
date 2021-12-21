import { useFormik } from "formik";
import * as Yup from "yup";

const SingUpForm = () => {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    // validate,
    validationSchema,
    validateOnMount: true,
  });
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  console.log(formik.touched);

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
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
        <div className="passwordConfirm">
          <label htmlFor="phoneNumber">password Confirm</label>
          <input
            type="text"
            {...formik.getFieldProps("passwordConfirm")}
            name="passwordConfirm"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div>
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};

export default SingUpForm;
