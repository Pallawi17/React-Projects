import React from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Keyfeature from "./pages/Keyfeature";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonial";


const App = () => {
  return (
    <div className="container">
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/features" element={<Keyfeature />}></Route>
         <Route path="/pricing" element={<Pricing />}></Route>
         <Route path="/testimonials" element={<Testimonials />}></Route>
         <Route path="/demo" element={<Demo />}></Route>
       </Routes>
     </Router>
    </div>
  )
}

export default App
