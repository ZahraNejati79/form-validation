import React from "react";

const RadioInput = ({ name, formik, radioOptions }) => {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <React.Fragment key={item.value}>
          <div className={item.label}>
            <input
              type="radio"
              id={item.value}
              value={item.value}
              onChange={formik.handleChange}
              name={name}
              checked={formik.values.gender === item.value}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        </React.Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
