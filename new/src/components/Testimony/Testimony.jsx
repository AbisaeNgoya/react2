import "./testimony.scss";

export default function Testimony() {

    const data= [
        {
      id:"1",
      icon:"./assets/arrow.png",
      icon1: "./assets/email.png",
      desc: "1.2	This Standard Tendering Document (SBD) for procurement of works has been prepared for use by the County Government of Kisumu in Kenya in the procurement of Works through National ",
      name:"Ongereh",
    
      title: "CEO Ongereh Foudation",
      img: "./assets/abisae.jpg",

        },
        {
            id:"2",
            icon:"./assets/arrow.png",
            icon1: "./assets/email.png",
            desc: "1.2	This Standard Tendering Document (SBD) for procurement of works has been prepared for use by the County Government of Kisumu in Kenya in the procurement of Works through National ",
            name:"Ongereh",
          
            title: "CEO Ongereh Foudation",
            img: "./assets/abisae.jpg",
            featured:true,
      
        },
        {
            id:"3",
            icon:"./assets/arrow.png",
            icon1: "./assets/email.png",
            desc: "1.2	This Standard Tendering Document (SBD) for procurement of works has been prepared for use by the County Government of Kisumu in Kenya in the procurement of Works through National ",
            name:"Ongereh",
          
            title: "CEO Ongereh Foudation",
            img: "./assets/abisae.jpg",
      
        },
    ]
  return (
    <div className='testimony'>
        <h1>Testimonials</h1>
        <div className="container">
            {data.map((item)=>
            <div className={item.featured ? "card featured" : "card"}>
                <div className="top">
                    <img src={item.icon} className="left" alt="" />
                    <img src={item.img} className="user"  alt="" />
                    <img src={item.icon1}className="right" alt="" />
                </div>
                <div className="center">
                    <p>{item.desc}
                    </p>
                </div>
                <div className="bottom">
                    <h3>{item.name}</h3>
                    <span>{item.title}</span>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}
