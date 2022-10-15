import React,{useEffect,useState} from "react";
import { FcLike } from "react-icons/fc";
const App = () => {
       const [data,setData]=useState([])
       const [like,setLike]=useState(0)
       useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            response.json().then((res)=>{
                setData(res)
            })
         })
       },[])
        
   const likefun=()=>{
    setLike(like+1)
   }
 
    return (
        <div>
            <div><h1>Home</h1><input placeholder="Search here..." display="flex"/><button>Search</button></div><div>{like}<FcLike /></div>
         <table border="1"  width='100%' height="70%">
            <tr>
                <td key="111">Id</td>
                <td>Name</td>
                <td>Username</td>
                <td>email</td>
                <td>Address</td>
                <td>Like User</td>
                
            </tr>
            {
                data.map((item)=>
                <tr>
                <td key='id'>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                
                <td><FcLike onClick={likefun}/></td>
            </tr>
                )
            }
         </table>
        </div>
    )
}
export default App;