import Intro1 from "./components/intro1/Intro1";
import Topbar1 from "./components/topbar/Topbar1";
import Works from "./components/works/Works";
import Portfolio1 from "./components/portfolio/Portfolio1";
import "./app.scss";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";
import Menu from "./components/menu/Menu";

import Testimonial1 from "./components/testimonials/Testimonial1";





function App() {
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
     <Topbar1 menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
    
      <Intro1/>
      <Portfolio1/>
      <Works/>
      
      <Testimonial1/>
      <Contacts/>
   
      
      
     </div>
    </div>
  );
}

export default App;
