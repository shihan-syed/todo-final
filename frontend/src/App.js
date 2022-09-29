
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import { Todo } from './components/todo';



import { SIGNIN } from './components/signin';
import { SIGNUP } from './components/signup';
// import { UpdateTodo } from './components/EditTodo';





function App() {
//  const { pathname }= useLocation ();
//  console.log(pathname);
  return (
    
 <div className='dark:bg-gray-900 w-screen h-full '>
    <Routes>
      <Route path='/signup' element={<SIGNUP/>} />
      <Route path='/signin' element={<SIGNIN/>} />
     
    <Route exact path='/todo' element={<Todo/>} />
    {/* <Route exact path='/edit' element={<UpdateTodo />}/> */}

   </Routes>

   </div>
  );
}

export default App;
