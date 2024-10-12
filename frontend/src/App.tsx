import Home from './Components/Home'
import './App.css'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Footer from './Components/Footer'
import {  Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import DietPlan from './Components/DietPlan'



function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /> <Services /><Footer /></>} />
          <Route path="/login" element={<><Login/><Footer /></>} />
          <Route path="/signup" element={<><SignUp/><Footer /></>} />
          <Route path="/diet-planner" element={<><DietPlan /></>} />
        </Routes>
    </>
  )
}

export default App
