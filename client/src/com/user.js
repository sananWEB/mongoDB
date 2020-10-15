import React, { Fragment,useState,useEffect } from 'react'
import axios from "axios"
function User() {

    const [data, setdata] = useState({
        
        username:"",
        email:"",
        password:"",
    })

    const change=(e)=>{

        setdata({
            ...data,
[e.target.name]:e.target.value
        })
    }
        
       
    const submit= async(e)=>{
         e.preventDefault();

         await axios.post("http://localhost:5000/user",data).then(res=>{console.log(res.data) })
         .catch(error=>{
             console.log(error)
         })

         setdata({
            username:"",
            email:"",
            password:"",
            Cpassword:""
        })
        
        
        
    }



    const [data1, setdata1] = useState({
        
        email:"",
        password:"",
    })

    const change1=(e)=>{

        setdata1({
            ...data1,
[e.target.name]:e.target.value
        })
    }
        
       
    const submit1= async(e)=>{
         e.preventDefault();

         await axios.post("http://localhost:5000/user/signin",data1).then(res=>{console.log(res.data) })
         .catch(error=>{
             console.log(error)
         })

         setdata({
           
            email:"",
            password:"",
           
        })
        
        
        
    }

   
    return (
        <Fragment>
            <h1>user data REGISTRATION</h1>
            <form onSubmit={submit}>
                UserName:<input onChange={change} type="text" name="username" value={data.username}/>
                Email:<input onChange={change} type="text" name="email" value={data.email}/>
                password:<input onChange={change} type="password" name="password" value={data.password}/>
                ConfirmPassword:<input onChange={change} type="password" name="Cpassword" value={data.Cpassword}/>
                <button type="submit">CLICK</button>
            </form>


            <h1>user data SIGN IN</h1>
            <form onSubmit={submit1}>
                Email:<input onChange={change1} type="text" name="email" value={data1.email}/>
                password:<input onChange={change1} type="password" name="password" value={data1.password}/>
                <button type="submit">CLICK</button>
            </form>
          
          
        </Fragment>
    )
}

export default User
