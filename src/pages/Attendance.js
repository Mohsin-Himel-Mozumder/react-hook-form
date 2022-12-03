import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';

const Attendance = () => {

    const token =localStorage.getItem('token')
    console .log(token);

    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/https://test.nexisltd.com/test',{
            headers:{
                "Authorization" : 'Bearer' + token,
            }
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setData(Object.values(data))
        })


    })
    
    return (
        <div className='container mt-3'>
            <img src={ logo} alt="" />
            <button className='mx-auto d-block mt-5 login-btn w-25'>Attendance information</button>
            {
                data.map(item => <li>{item.name}</li>)
            }
          </div>
    );
};

export default Attendance;