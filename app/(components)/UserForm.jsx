"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      "content-type": "application/json",
    };
    const res = await fetch("/api/user", options);

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push();
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 w-1/2 p-20 rounded bg-gray-100"
      >
        <h1>Create New User</h1>
        <label htmlFor="">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required={true}
          value={formData.name}
          className="m-2 p-2 bg-slate-400 rounded"
        />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          required={true}
          value={formData.email}
          className="m-2 p-2 bg-slate-400 rounded"
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required={true}
          value={formData.password}
          className="m-2 p-2 bg-slate-400 rounded"
        />
        <button type="submit" className="m-2 p-2 rounded bg-blue-700 text-white">Submit</button>
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
