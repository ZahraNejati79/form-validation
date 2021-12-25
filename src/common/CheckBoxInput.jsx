import React from "react";

const CheckBoxInput = ({ name, formik, checkBoxOptions }) => {
  return (
    <div className="formControl">
      {checkBoxOptions.map((item) => (
        <React.Fragment key={item.value}>
          <div className={item.label}>
            <input
              type="checkbox"
              id={item.value}
              value={item.value}
              onChange={formik.handleChange}
              name={name}
              checked={formik.values[name].includes(item.value)}
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

export default CheckBoxInput;
