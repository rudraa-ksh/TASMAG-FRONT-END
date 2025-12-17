import './App.css'
import Signup from "./pages/signup/Signup.jsx"
import {Route, Routes} from "react-router-dom";
import Rounded from './components/common/rounded/Rounded.jsx';
import Login from "./pages/login/Login.jsx"
import Password from "./pages/password/password.jsx"
import Study from "./pages/signup/Study.jsx"
import Schedule from './pages/schedule/Schedule.jsx';

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/password" element ={<Password/>}/>
        <Route path='/study' element={<Study/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
      <div className='mode'>
          <Rounded name="dark_mode"/>
      </div>
    </>
  )
}

export default App
