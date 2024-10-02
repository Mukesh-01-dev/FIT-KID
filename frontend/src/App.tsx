import Home from './Components/Home'
import './App.css'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import DietPlanner from './Components/DietPlanner'


function App() {

  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /> <Services /><Footer /></>} />
          <Route path="/login" element={<><Login/><Footer /></>} />
          <Route path="/signup" element={<><SignUp/><Footer /></>} />
          <Route path="/diet-planner" element={<><DietPlanner /></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
