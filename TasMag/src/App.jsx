import './App.css'
import CreateAccount from "./components/CreateAccount.jsx"
// import Landing from './components/Landing.jsx';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Landing/>}/> */}
        <Route path="/" element ={<CreateAccount/>}/>
      </Routes>
      <div className='mode'>
          <div className='mode-inner'>
            <span class="material-symbols-outlined">dark_mode</span>
          </div>
      </div>
    </>
  )
}

export default App
