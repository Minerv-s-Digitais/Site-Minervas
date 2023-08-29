// import React, {useState} from "react"
// import { Navigate } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"

//import { useAuth0 } from "@auth0/auth0-react"
// import Button from "@material-ui/core/Button"
// import { makeStyles } from '@material-ui/core/styles';

//import LoginButton from "../authentication/LoginButton"
// import { useLocation, redirect } from 'react-router-dom'
// import User from "./User"

import "./Menu.scss"

// const useStyles = makeStyles({
//   root: {
//     textTransform: "none",
//     borderRadius: 55,
//     fontFamily: "Mulish",
//     fontSize: 16,
//     height: 30,
//     color: "#1F1534",
//     "&:hover": {
//       color: "#096262",
//       backgroundColor: "white",
//       fontWeight: "bold",
//     },
//   },
//   selected: {
//     textTransform: "none",
//     borderRadius: 55,
//     fontFamily: "Mulish",
//     fontSize: 16,
//     height: 30,
//     color: "#096262",
//     fontWeight: "bold",
//     backgroundColor: "white",
//   },
//   label: {
//     textTransform: 'capitalize',
//   },
// });

function Menu() {
  // const [page, setPage] = useState("")
  // const { isAuthenticated } = useAuth0()
  // let location = useLocation();
  // const classes = useStyles();

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });    
  }

  return (
    <div className="button-group">
      <Link to ="#" smooth className="botao-navbar">
        Home
      </Link>
      <Link to ="#Who" className="botao-navbar" scroll={el => scrollWithOffset(el, 90)}>
        Quem Somos
      </Link>
      <Link to ="#Events" className="botao-navbar" scroll={el => scrollWithOffset(el, 5)}>
        Eventos
      </Link>
      <Link to ="#Partners" className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Parceiros
      </Link>
      <Link to ="#Contact" className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Contato
      </Link>
      {/* <Button
        classes={{
          root: (location.pathname === "/Who" ) ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/Who")}
      >
        Quem Somos
      </Button> */}
      {/* <Button
        classes={{
          root: location.pathname === "/Eventos" ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/resources")}
      >
        Recursos
      </Button> */}
      {/* <Button
        classes={{
          root: location.pathname === "/Partners" ? classes.selected : classes.root,
          label: classes.label,
        }}
        onClick={() => setPage("/Partners")}
      >
        Parceiros
      </Button> */}
      {/* <Button
        classes={{
          root: location.pathname === "/about" ? classes.selected : classes.root,
          label: classes.label,
        }}
      >
        Sobre nós
      </Button> */}

      {/* {!isAuthenticated ? (<LoginButton />) : (<User />)} */}
    </div>
  )
}

export default Menu
