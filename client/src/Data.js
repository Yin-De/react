import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Data() {
  const [backend,setbackend]=useState([])
    const [texts,settext]=useState('')
  
    const url='/api'
 
    
   const submit=(e)=>{
 e.preventDefault()
 console.log(texts);
 axios.post(url,{
  name:texts
 })
 .then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error.message);
});
    }
    const getuser=async()=>{
      fetch("/api").then(
        response=>response.json()
      ).then(
        data=>{
          setbackend(data)
          console.log(data.names);
        }
      )
      
     }
    
    useEffect( ()=>{
       getuser()
      
      
    },[])


return(
  <div>
    <form  >
      <input type="text" name="name" onChange={(e)=>settext(e.target.value)} value={texts} />
      <button type='submit' onClick={submit}>submit</button>
    </form>
      <div>
    <h1>utfvygu</h1>
    {/* {
      backend.map((data,index)=>{//th
        console.log(data.names);
return;
      })
    } */}
  </div>
  
  </div>

)
  }
  

export default Data
