import React, { useState } from 'react';
import logo from '../images/logo.png'
import login from '../images/login.png'
import right_arrow from '../images/right_arrow.svg'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';





const SignUp = () => {
    // eslint-disable-next-line

    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[phone,setPhone]=useState('' )
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')




    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => signUp(data);

  const signUp =data =>{
    const signupDetails={
    "first_name":data.first_name,
    "last_name": data.last_name,
    "phone_number":data.phone_number,
    "email": data.email,
    "password": data.password

  }
  fetch('https://test.nexisltd.com/signup',{
    method: 'POST',
    body:JSON.stringify(signupDetails) 
  })
//   alert("User Added Successfully")
//   Navigate('/login')

.then(res=>res.json())
.then(data=>console.log(data.sucess))
  
}




    return (
        <div className='container mt-5'>
        <div className="row">
           <div className="col-md-6">
            <img src={logo} alt="brand logo" className='img-fluid'/>
            <img src={login} alt="brand people" className='img-fluid'/>

           </div>
           <div style={{minHeight:'78vh'}}  className="col-md-6 my-3 right-container-login p-4">
            <h2 className='mt-5 text-center fw-bold'>SignUp Form</h2>
            <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* first step */}
                <div id='first-step'>
                <div className='my-5'>
                <input id='first_name'  placeholder='Write First Name' className="w-100 custom-form" {...register("first_name", { required: true })} />
                 {errors.first_name && <span>First Name is required</span>}

                </div>
                <div className='mt-5'>
                <input id='last_name' placeholder='Write Last Name' className=" w-100 custom-form" {...register("last_name", { required: true })} />
                {errors.last_name && <span>Last Name is required</span>}
                </div>
                <button onClick={()=>{


                    document.getElementById('first-step'). style.display ='none';
                    document.getElementById('second-step'). style.display ='block';
                    setFirstName(document.getElementById('first_name').value)
                    setLastName(document.getElementById('last_name').value)


                    
                }} 
                className='mx-auto d-block login-btn w-25 my-5'>Next Step <img src={right_arrow} className='img-fluid' width={20} alt="right arrow" /></button>

                 {/* second step */}

                </div>
                <div style={{display:'none'}} id='second-step'>
                <div className='mt-5 d-flex'>
                    <label style={{borderBottom:'1px solid lightgrey'}} className='text-muted'>+880</label>
                <input id='phone_number'  placeholder='1xxxxxxxxxx' className="w-100 custom-form " {...register("phone_number", { required: true })} />
                </div>
                
                {errors.phone_number && <span>Phone Number is required</span>}
                 
                <div className='my-5'>
                <input type='email' id='email' placeholder='Write Email Address' className=" w-100 custom-form" {...register("email", { required: true })} />
                {errors.email && <span> Email Address is required</span>}
                </div>
                <button  onClick={()=>{


               document.getElementById('second-step'). style.display ='none';
               document.getElementById('last-step'). style.display ='block';
               setPhone(document.getElementById('phone_numbe').value)
               setEmail(document.getElementById('email').value)



}} 
               className='mx-auto d-block login-btn w-25 my-5'>Next Step <img src={right_arrow} className='img-fluid' width={20} alt="right arrow" /></button>

                </div>

                 {/* last step */}
                



                 <div style={{display:'none'}} id="last-step">

                <div className='mt-5'>
                <input type='password' placeholder='Write Password' className=" w-100 custom-form" {...register("password", { required: true, min:8 })} />
                {errors.password && <span>password is required</span>}
                </div> 
                <small>Your password must be 8 character</small> 
                <div className='my-5'>
                <input type="submit" className='mx-auto d-block login-btn'  value='Log In'/>

                 

                
                   
                </div> 

                 </div>
    
    </form>
    
   
 <p className="text-center mt-5">
 <Link to ='/login' className='text-decoration-none text-muted text-center '>Already have an account?  <span className='ps-3 fw-bold' style={{color:'#1678CB',textDecoration:'underline'}}>LOGIN HERE!</span></Link>

 </p>

            </div>
            

           </div>
            </div>    
        </div>
    );
};

export default SignUp;