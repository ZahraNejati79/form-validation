import { useFormik } from "formik";

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

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    validate,
  });
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            // onChange={changeHandler}
            // value={inputform.name}
            name="name"
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            // onChange={changeHandler}
            // value={inputform.email}
            name="email"
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            // onChange={changeHandler}
            // value={inputform.password}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SingUpForm;
