import "./portlist.scss"

export default function Portfoliolist({id, title, active, setSelected}) {
  return (

    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
    //<li className = {active ? "portfoliolist active":"portfoliolist"} onClick={()=>setSelected(id)} >
        //{title}

    //</li>
  )
}
