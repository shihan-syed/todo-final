// import axios from 'axios'
import  {authaxios} from './axiosinterceptor/axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router';
import { UpdateTodo } from './EditTodo';
const baseURL= 'http://localhost:4000/api';

export const ListTodo = () => {
const [todos ,setTodos]=useState([])

const getTodos=async()=>{
    try {
        const response = await authaxios.get(`${baseURL}/all`).then((data)=>{ 
            console.log(data);
            setTodos(data.data)
            
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
    getTodos();
},[])

const deleteTodo =async(id)=>{
    try {
       await authaxios.delete(`${baseURL}/delete/${id}`)
        setTodos(todos.filter((todo)=>todo.id !== id))
    } catch (error) {
        console.log(error);
    }
}
const navigate = useNavigate();
const editTodo =async(id)=>{

    await localStorage.setItem('todoId' , id)
    navigate('/edit')
}

    



  return (
 <div className='h-screen ' >
 <table className='w-full justify-between content-center text-center '>
   
    <thead className=''>
        <tr className='text-black  '>
            <th className='bg-blue-400 text-white w-4/8  '>Description</th>
            <th className='bg-orange-400 text-white w-2/8 px-3 '>Edit</th>
            <th className='bg-red-400 text-white w-2/8'  >Delete</th>
        </tr>
    </thead>
    
    <tbody >
        {todos.map((todo )=>
            <tr className=' ' key={todo.id}  >
                <td className='py-1'>{todo.text}</td> 
                <td className=''><button className='p-2 px-5 ml-2 border-2 rounded text-white bg-orange-400 ' onClick={()=>{editTodo(todo.id)}}>Edit</button></td> 
                <td className=''><button className=' p-2 ml-2 border-2 rounded text-white bg-red-400 ' onClick={()=>{deleteTodo(todo.id)}} >Delete</button></td>
            </tr>
        
        )}
    </tbody>
    </table>
    </div>
   
  )
}

