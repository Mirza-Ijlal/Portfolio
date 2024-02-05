"use client"
import React, { useState } from 'react';
import'./contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    console.log('form Data', formData);
    setFormData({
      name: '',
      email: '',
      number: '',
    });
  };

  return (
    <section className='formsection'>
      <h1 className='h1clas'>Contact Form</h1>
      <div className="form-group">
        <label className='lables' htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="form-group">
        <label className='lables' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="form-group">
        <label className='lables' htmlFor="number">Phone Number:</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Enter your phone number"
          onChange={handleChange}
          value={formData.number}
        />
      </div>
      <button className='mybutton' onClick={handleClick}>Submit</button>
    </section>
  );
};

export default Contact;
