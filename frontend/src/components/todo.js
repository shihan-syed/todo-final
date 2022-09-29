import React from 'react'
import { InputTodo } from './InputTodo'
import { ListTodo } from './ListTodo'

export const Todo = () => {
  return (
    <div className='w-3/4 p-5 mx-auto  '>
    <div className='bg-white rounded-md p-2 h-full w-full '>
  <InputTodo />
    <ListTodo/>
   
  

   
   
   </div>
        </div>
   
  )
}