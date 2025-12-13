import './App.css'
import Signup from "./pages/signup/Signup.jsx"
import {Route, Routes} from "react-router-dom";
import Rounded from './components/common/rounded/rounded.jsx';
import Login from "./pages/login/Login.jsx"
import Password from "./pages/password/password.jsx"

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/password" element ={<Password/>}/>
      </Routes>
      <div className='mode'>
          <Rounded name="dark_mode"/>
      </div>
    </>
  )
}

export default App
