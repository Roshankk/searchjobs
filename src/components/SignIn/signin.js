import React from "react";
import { useState, useEffect } from 'react';
import './signin.css'
const SignIn = () => {
  const initialValues = { username: "", email: "", password: "", phoneNumber: "", BOD: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIssubmit(true)
  }
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    // const regex = /^[^\s@]+@[^\s@]+\.[\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'username is required'
    } 
    if (!values.email) {
      errors.email = 'email is required'
    }else if ( (!values.email)){
      errors.email='this is not a valid email add..'
    }
    if (!values.password) {
      errors.password = 'password is required'
    }else if (values.password.length < 4){
      errors.password='this is not a valid password...'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'phoneNumber is required'
    }else if  (values.phoneNumber<10){
      errors.phoneNumber='this is not a valid phoneNumber...'
    }
    return errors;
  }
  return (

    <div className="container">
         {Object.keys(formErrors).length === 0 && isSubmit ? (alert('submmited success')):(alert('please fill the  required information'))}
      <center>
        <form class="form" >
          <h1 >Sign-In Form</h1>
          <hr />
          <hr />
          <div class="input-box">
            <label>username</label>
            <input type="text" name='username' placeholder="Enter full name" value={formValues.username} onChange={handleChange} />
          </div>
          <p>{formErrors.username}</p>

          <div class="input-box">
            <label>Email </label>
            <input type="text" name='email' placeholder="Enter email address" value={formValues.email} onChange={handleChange} />
          </div>
          <p>{formErrors.email}</p>
          <div class="input-box">
            <label>Password</label>
            <input type="text" name='password' placeholder="Enter your password" value={formValues.password} onChange={handleChange} />
          </div>
          
          <p>{formErrors.password}</p>

          <div class="column">
            <div class="input-box">
              <label>Phone Number</label>
              <input type="number" name='phoneNumber' placeholder="Enter phone number" value={formValues.phoneNumber} onChange={handleChange} />
            </div>
            
          <p>{formErrors.phoneNumber}</p>
            <div class="input-box">
              <label>Birth Date</label>
              <input type="date" name='DOB' placeholder="Enter birth date" />
            </div>
          </div>
          <div class="gender-box">
            <h3>Gender</h3>
            <div class="gender-option">
              <div class="gender">
                <input type="radio" id="check-male" name="gender" />
                <label for="check-male">male</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-female" name="gender" />
                <label for="check-female">Female</label>
              </div>
              <div class="gender">
                <input type="radio" id="check-other" name="gender" />
                <label for="check-other">prefer not to say</label>
              </div>
            </div>
          </div>
          <div class="input-box address">
            <label>Address</label>
            <input type="text" name='Address' placeholder="Enter street address" />
            <input type="text" name='Address' placeholder="Enter street address line 2" />
            <div class="column">
              <div class="select-box">
                <select>
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" />
            </div>
            <div class="column">
              <input type="text" placeholder="Enter your region" required />
              <input type="number" placeholder="Enter postal code" required />
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </center>

    </div>
  )
}
export default SignIn;