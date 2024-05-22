import { HashLink as Link } from "react-router-hash-link"

import "./Menu.scss"

function Menu({ menuOpen }) {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });    
  }

  return (
    <div className={`button-group ${menuOpen ? "open" : ""}`}>
         
      <Link to ="/#" smooth className="botao-navbar">
        Home
      </Link>
      <Link to ="/#Who" className="botao-navbar" scroll={el => scrollWithOffset(el, 90)}>
        Quem Somos
      </Link>
      <Link to ="/#Events" className="botao-navbar" scroll={el => scrollWithOffset(el, 5)}>
        Eventos
      </Link>
      <Link to ="/#Partners" className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Parceiros
      </Link>
      <Link to ="/#Contact" className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Contato
      </Link>

    </div>
  )
}

export default Menu
