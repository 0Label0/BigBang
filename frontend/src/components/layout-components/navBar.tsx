import { useState } from "react";
import '../../styles/nav.css';


const NavBar = ():JSX.Element => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  }
  
  return(
    <>
      <div style={{width:"40px", height:"40px"}} onClick={handleToggle}>
        <svg
          className={navToggle ? "icon" : "icon-spiner"} 
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path fill="#fff" d="M 8 6 C 6.3550302 6 5 7.3550302 5 9 L 5 11 C 5 12.64497 6.3550302 14 8 14 L 40 14 C 41.64497 14 43 12.64497 43 11 L 43 9 C 43 7.3550302 41.64497 6 40 6 L 8 6 z M 8 8 L 40 8 C 40.56503 8 41 8.4349698 41 9 L 41 11 C 41 11.56503 40.56503 12 40 12 L 8 12 C 7.4349698 12 7 11.56503 7 11 L 7 9 C 7 8.4349698 7.4349698 8 8 8 z M 8 20 C 6.3550302 20 5 21.35503 5 23 L 5 25 C 5 26.64497 6.3550302 28 8 28 L 40 28 C 41.64497 28 43 26.64497 43 25 L 43 23 C 43 21.35503 41.64497 20 40 20 L 8 20 z M 8 22 L 40 22 C 40.56503 22 41 22.43497 41 23 L 41 25 C 41 25.56503 40.56503 26 40 26 L 8 26 C 7.4349698 26 7 25.56503 7 25 L 7 23 C 7 22.43497 7.4349698 22 8 22 z M 8 34 C 6.3550302 34 5 35.35503 5 37 L 5 39 C 5 40.64497 6.3550302 42 8 42 L 40 42 C 41.64497 42 43 40.64497 43 39 L 43 37 C 43 35.35503 41.64497 34 40 34 L 8 34 z M 8 36 L 40 36 C 40.56503 36 41 36.43497 41 37 L 41 39 C 41 39.56503 40.56503 40 40 40 L 8 40 C 7.4349698 40 7 39.56503 7 39 L 7 37 C 7 36.43497 7.4349698 36 8 36 z"></path>
        </svg>
      </div>
      <nav>
        <ul className={navToggle ? "links" : "links-hidden"}>
          <li className="link-container"><a href="/admin" className="link">adim</a></li>
          <li className="link-container"><a href="/" className="link">index</a></li>
          <li className="link-container"><a href="" className="link">Cubata</a></li>
          <li className="link-container"><a href="" className="link">Especiales</a></li>
        </ul>
      </nav>
      

    </>
  );
}

export default NavBar;