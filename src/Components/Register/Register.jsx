import React from 'react';
import { useFormik } from 'formik';

export default function Register() {

  function validate(values) {
    const errors ={};

    if (values.name == "") {
      errors.name = 'Name Is Required'
    } else if(values.name.length < 3) {
      errors.name = "Name Must Be More Than 3 Chracters"
    }else if (values.name.length < 20) {
      errors.name = "Name Must Be Less Than 20 Chracters"
    }

    if (values.email == "") {
      errors.name = 'Email Is Required'
    } else if(!(/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i).test(values.email)) {
      errors.name = "Email Is Invalide"
    }

    if (values.password == "") {
      errors.name = 'Password Is Required'
    } else if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/).test(values.password)) {
      errors.name = "Password Is Invalide"
    }

    if (values.rePassword == "") {
      errors.name = 'RePassword Is Required'
    } else if(values.password != values.rePassword) {
      errors.name = "RePassword Is Not Equal To Password"
    }

    if (values.phone == "") {
      errors.name = 'Phone Is Required'
    } else if(!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(values.phone)) {
      errors.name = "Phone Is Invalide"
    }
    return errors;
  }


  const {values, handleSubmit, errors, handleChange, touched ,handleBlur} = useFormik({
    initialValues :{
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit : () =>{
      console.log(values);
    },
    validate
  })

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Register Now :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='my-1'>Name:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" className='form-control mb-3' id='name' name='name' />
        {errors.name && touched.name && <p className='alert alert-danger'>{errors.name}</p>}

        <label htmlFor="email" className='my-1'>Email:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" className='form-control mb-3' id='email' name='email' />
        {errors.email && touched.email && <p className='alert alert-danger'>{errors.email}</p>}

        <label htmlFor="password" className='my-1'>Password:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" className='form-control mb-3' id='password' name='password' />
        {errors.password && touched.password && <p className='alert alert-danger'>{errors.password}</p>}

        <label htmlFor="rePassword" className='my-1'>RePassword:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.rePassword} type="password" className='form-control mb-3' id='rePassword' name='rePassword' />
        {errors.rePassword && touched.rePassword && <p className='alert alert-danger'>{errors.rePassword}</p>}

        <label htmlFor="phone" className='my-1'>phone:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.phone} type="tel" className='form-control mb-3' id='phone' name='phone' />
        {errors.phone && touched.phone && <p className='alert alert-danger'>{errors.phone}</p>}

        <button type='submit' className='btn bg-main px-3 text-white ms-auto d-block'>Register</button>

         {/* <div className="alert alert-danger">errorMessage</div> */ }

        {/* <button disabled type='button' className='btn bg-main px-3 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner'></i> </button> */ }

        
      </form>
    </div>
  </>
}
