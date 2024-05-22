import { useField } from "formik";
import React from "react";

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
     <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "error-msg" : ""}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-msg" : ""}
        autoComplete="off"
      />
     
      {meta.touched && meta.error ? (
        <small className="error-msg">{meta.error}</small>
      ) : null}
    </>
  );
};
export const InputTextArea = ({ label, cls, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
     <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "error-msg" : ""}
      >
        {label}
      </label>
      
      <textarea
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "error-msg textarea" : "textarea"
        } ${cls}`}
        autoComplete="off"
      />
     
      {meta.touched && meta.error ? (
        <small className="error-msg">{meta.error}</small>
      ) : null}
    </>
  );
};

export const InputSelect = ({ label, onChange = null, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-msg" : null}
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
      />

      {meta.touched && meta.error ? (
        <span className="error-msg">{meta.error}</span>
      ) : null}

      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "custom error-msg" : "custom"}
      >
        {label}
      </label>
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={"file-upload-label"}>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};
