import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";

export default function SIgnUp() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid Email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("sub", values);
    },
  });

  //   console.log(firstName);
  console.log(formik.values);
  console.log("Formik errors", formik.errors);
  console.log("Formik touched", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
          //   onChange={(e) => setFirstName(e.target.value)}
          //   value={firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
