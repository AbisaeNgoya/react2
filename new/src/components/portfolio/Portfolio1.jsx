
import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";
import { featuredPortfolio,
   webPortfolio,
   mobilePortfolio, 
   designPortfolio,
   brandingPortfolio } from "../../data";


export default function Portfolio1() {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title:  "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    }, 
  ];
  useEffect(()=>{

    
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "branding":
        setData(brandingPortfolio);
        break;
        default: 
        setData(featuredPortfolio);
    }
  }, [selected])
  return (
    <div className='portfolio' id="portfolio">
    <div className="wrapper">
      <h1>
        Portfolio
      </h1>
      <ul>
        {list.map((item)=> (
          <Portfoliolist 
          key={item.id}  // Add unique key
          title={item.title} 
          active = {selected === item.id} 
          setSelected = {setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>

        ))}

        
      </div>
    </div>

    </div>
  )
}
