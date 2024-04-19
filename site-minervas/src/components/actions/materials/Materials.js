import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import arrow from "../../../assets/actions/actions-arrow.svg";
import vector from "../../../assets/actions/actions-yellow-vector.svg";

import "./Materials.scss";

const ColorButton = withStyles(() => ({
    root: {
      width: "288px",
      height: "63px",
      textTransform: "none",
      border: "1px solid #3F005E",
      borderRadius: 25,
      fontFamily: "Lato",
      backgroundColor: "#FFFFFF",
      color: "#3F005E",
      margin: "45px",
      "&:hover": {
        backgroundColor: "#3F005E",
        color: "#FFFFFF",
      },
    },
  }))(Button)
  


function Materials() {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    const openURL = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="actions-container">
            <Link to="#Actions" onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#Actions");
                if (element) {
                    scrollWithOffset(element, 108);
                }
            }}>
                <img src={arrow} alt="seta" />
            </Link>
            <div className="materials-title">
                Materiais
                <img className="vector" src={vector} alt="Tracinho amarelo" style={{ width: "10%", paddingLeft: "9rem" }}/>
            </div>
            <div className="materials-buttons">
                <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={() => openURL("https://www.google.com")}>
                    Drive do Minerv@s →
                </ColorButton>
                <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={() => openURL("https://medium.com/minervas-digitais-ufrj")}>
                    Artigos Publicados →
                </ColorButton>
            </div>
        </div>
    );
}

export default Materials;
