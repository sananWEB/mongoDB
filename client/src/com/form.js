import React, { Fragment,useState,useEffect } from 'react'
import axios from "axios"
function Form() {

    const [data, setdata] = useState({
        
        username:""
    })

    const change=(e)=>{

        setdata({
[e.target.name]:e.target.value
        })
    }
          const [errormsg, seterrormsg] = useState("")
       
    const submit= async(e)=>{
         e.preventDefault();

         await axios.post("http://localhost:5000/data",data).then(res=>{console.log(res.data);seterrormsg(res.data) })
         .catch(error=>{
             console.log(error)
         })

         setdata({
            username:""
        })
        
        setTimeout(() => {
            
            seterrormsg("")

        }, 3000);
        
    }

   
    return (
        <Fragment>
            <h1>insert Data</h1>
            <form onSubmit={submit}>
                UserName:<input onChange={change} type="text" name="username" value={data.username}/>
                
                <button type="submit">CLICK</button>
            </form>
            <h1>{errormsg}</h1>
        </Fragment>
    )
}

export default Form
