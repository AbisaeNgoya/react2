import "./topbar.scss"


//calling the use state function in App.jsx below
export default function Topbar1({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="icon">
            <img src="assets/person.png" alt="" />
            <span>+254 7400 82 705</span>
          </div>

          <div className="icon">
            <img src="assets/email.png" alt="" />
            <span>ajiradigital@gmail.com</span>
          </div>
         
        
          

          

        </div>
        <div className="right">
          <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
           <span className="line1"> </span>
           <span className="line2"> </span>
           <span className="line3"> </span>
          </div>
        </div>
        </div>
    </div>
  )
}
