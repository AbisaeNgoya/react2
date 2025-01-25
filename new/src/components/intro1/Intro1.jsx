import "./intro.scss";



export default function Intro1() {
  return (
    <div className='intro'id="intro">
    <div className="left">
    <div className="imgcontainer">
      <img src="assets/abisae.jpg" alt="" />
    </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi, my name is</h2>
        <h1>Abisae Ng'iendo</h1>
        <h3>I create robust system solutions for the web</h3>
        <span>I'm a passionate Full-Stack web developer with
          hands on experience in building web applications using 
          Javascript, React.js & Next.js with Typescript, TailwindCss, 
          and Prisma, with System designing.
        </span>
      </div>
      <a href="#portfolio">
        <img src="assets/arrow.png" alt="" />
      </a>
    </div>
    </div>
  )
}
