import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [errorMsg , setErrorMsg] = useState('')
  const [isLoading, setLoading]  = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    email : Yup.string().required("Email is required").matches(/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i,"Email is invalide"),
    password : Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,"Password is invalide"),
  })

  const {values, handleSubmit, errors, handleChange, touched ,handleBlur ,isValid ,isl} = useFormik({
    initialValues :{
      email: "",
      password: "",
    },
    onSubmit : async () =>{
      setErrorMsg("");
      try {
        setLoading(true)
        let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
        setErrorMsg(data.message);
        if(data.message == "success"){
          navigate("/home")
        }
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
      setLoading(false)
      
    },
    // validate
    validationSchema
  })

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Login Now :</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email" className='my-1'>Email:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" className='form-control mb-3' id='email' name='email' />
        {errors.email && touched.email && <p className='alert alert-danger'>{errors.email}</p>}

        <label htmlFor="password" className='my-1'>Password:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" className='form-control mb-3' id='password' name='password' />
        {errors.password && touched.password && <p className='alert alert-danger'>{errors.password}</p>}

        {isLoading ? 
          <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner'></i> </button>
         :
          <button type='submit' disabled={!isValid || isLoading} className='btn bg-main px-3 text-white ms-auto d-block'>Login</button>
        }

         {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        

        
      </form>
    </div>
  </>
}