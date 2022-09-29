import React , {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
const baseURL = 'http://localhost:4000/auth';

export const SIGNIN = () => { 
  const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signin =async (e)=>{
        e.preventDefault();
       await axios.post(`${baseURL}/signin`,{
            email : email ,
            password : password 
        }).then((res)=>{
            console.log(res.status);
            if(res.status){ 
                alert('successfully login')
                localStorage.setItem('token', res.data.token)
            navigate('/todo')}
            // else {
                
            // }}
        }).catch((error)=>{
          alert('incorrect username or password')
        })

    }
 


  return (
    <section className="h-screen bg-gray-50 dark:bg-gray-900">
    <div className="px-6 h-full text-gray-800">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6" >

        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" > <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Sample image" /> </div>
        
        <div className="lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

        <form className="space-y-4 md:space-y-6" onSubmit={signin}>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>

                  <button type="submit"  className="w-full text-white bg-green-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  > SIGN IN </button>
              
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

