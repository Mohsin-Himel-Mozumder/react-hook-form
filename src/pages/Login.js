import React from 'react';
import '../style/Login.css';
import logo from '../images/logo.png'
import login from '../images/login.png'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => loginHandler (data);

  const loginHandler =(data) =>{
    
    const loginDetails={
        "email":data.email,
        "password":data.password,
        
    }

    fetch('https://test.nexisltd.com/login',{
    method: 'POST',
    body:JSON.stringify(loginDetails) 
  })

.then(res=>res.json())
.then(data=>{

    console.log(data.access_token)
    localStorage.setItem('token', data.access_token)



})
    
  }




    return (
        <div className='container mt-5'>
        <div className="row">
           <div className="col-md-6">
            <img src={logo} alt="brand logo" className='img-fluid'/>
            <img src={login} alt="brand people" className='img-fluid'/>

           </div>
           <div style={{minHeight:'78vh'}}  className="col-md-6 my-3 right-container-login p-4">
            <h2 className='mt-5 text-center fw-bold'>Log in Form</h2>
            <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-5'>
                <input  placeholder='Write Email Address' className="w-100 custom-form" {...register("email", { required: true })} />
                 {errors.email && <span>Email is required</span>}

                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Write Password' className=" w-100 custom-form" {...register("password", { required: true })} />
                {errors.password && <span>password is required</span>}
                </div>
                <small>Your password must be 8 character</small>
                <div className='mt-5'>
                <input type="submit" className='mx-auto d-block login-btn'  value='Log In'/>
                   
                </div>
    
    </form>
   
 <p className="text-center mt-5">
 <Link to ='/signup' className='text-decoration-none text-muted text-center '>Don’t have an account? <span className='ps-3 fw-bold' style={{color:'#1678CB',textDecoration:'underline'}}>SIGNUP HERE!</span></Link>

 </p>

            </div>
            

           </div>
            </div>    
        </div>
    );
};

export default Login;