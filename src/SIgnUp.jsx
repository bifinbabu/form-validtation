import React, { useState } from "react";
import { useFormik } from "formik";

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
    onSubmit: (values) => {
      console.log("sub", values);
    },
  });

  //   console.log(firstName);
  console.log(formik.values);

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
          value={formik.values.firstName}
        />
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
