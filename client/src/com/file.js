import React,{useState,useEffect} from 'react'
import axios from "axios"
function File() {

    const [file, setFile] = useState('');


    const filee=(e)=>{
      
      setFile(e.target.files[0])
     console.log(e.target.files[0])
    }
    const submit= async(e)=>{
    
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

       await axios.post("http://localhost:5000/product",formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

      }).then(res=>{console.log(res.data)}).catch(error=>{
            console.log(error)
        })
    }

   
    return (
        <div>
            <form onSubmit={submit} >
                
                <input type="file" name="productimg" onChange={filee}/>
                <button type="submit">CLICK</button>
            </form>
        </div>
    )
}

export default File









// import React,{useState,useEffect} from 'react'
// import axios from "axios"
// function File() {

//     // const [data, setdata] = useState({
        
//     //     product:"",
//     //     price:"",
//     //     productimg:null
//     // })


//     const [file, setFile] = useState('');
// //     const change=(e)=>{

// //         setdata({
// // ...data,
// // [e.target.name]:e.target.value
// //         })
// //     }


//     const filee=(e)=>{
//       //  console.log(e.target.files[0]
//       setFile(e.target.files[0])
//      console.log(e.target.files[0])
//     }
//     const submit= async(e)=>{
    
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('file', file);

//        await axios.post("http://localhost:5000/product",formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },

//       }).then(res=>{console.log(res.data)}).catch(error=>{
//             console.log(error)
//         })
//     }

   
//     return (
//         <div>
//             <form onSubmit={submit} >
//                 {/* product:<input onChange={change} type="text" name="product" value={data.product}/>

//                 Price:<input onChange={change} type="text" name="price" value={data.price}/> */}
//                 <input type="file" name="productimg" onChange={filee}/>
//                 <button type="submit">CLICK</button>
//             </form>
//         </div>
//     )
// }

// export default File



