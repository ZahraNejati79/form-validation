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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
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
