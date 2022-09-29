// import axios from 'axios';
import  {authaxios} from './axiosinterceptor/axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
const baseURL= 'http://localhost:4000/api';


export const InputTodo = () => {
    const [description , setDescription]=useState('');
   




    const onSubmitForm =async(e)=>{
        e.preventDefault();
        try {
            
             await  authaxios.post(`${baseURL}/new`,{ text : description}).then((data)=>console.log(data))
          window.location ='/todo';
        
            }
         catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate();

    const logout = ()=>{
    localStorage.clear()
navigate('/signin')
    }
  
    
   

  return (
   <div className="mb-4">
           <div className='flex  justify-between '>

            <div>  <h1 className="text-black text-xl font-bold">Todo List</h1> </div>
            <div> <button className='bg-blue-400 p-2 text-white' onClick={logout}> logout </button></div>
           </div>
            <div className="flex mt-4">
               
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" required placeholder="Add Todo" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <button className=" p-2 border-2 rounded text-teal border-teal text-white bg-green-600" onClick={onSubmitForm}>Add</button>
                
            </div>
        </div>
  
  )
}

