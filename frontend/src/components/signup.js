import React , {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
const baseURL = 'http://localhost:4000/user';




export const SIGNUP = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const signup =(e)=>{
        e.preventDefault();
        axios.post(`${baseURL}/signup`,{
            email : email ,
            password : password 
        }).then((res)=>{
            console.log(res);
            if(res.status){ 
                alert('successfully created')
            navigate('/signin')
            }else {
                alert(res.message)
            }
        })

    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen ">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white px-12 m-2">
                  CREATE AN ACCOUNT
              </h1>
              
              <form className="space-y-4 md:space-y-6" onSubmit={signup}>
            
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email"  required value={email} name="email" onChange={(e)=>setEmail(e.target.value)}  />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} name="password" onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <div>
                      
                  <button type="submit" className="w-full text-white bg-green-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  > SIGN UP </button>
                 </div>   
              </form>
            
          </div>
      </div>
  </div>
</section>
  )
}

