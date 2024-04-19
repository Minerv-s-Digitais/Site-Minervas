import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import arrow from "../../../assets/actions/arrow-down.svg";
import vector from "../../../assets/actions/actions-yellow-vector.svg";

import exampleImage from "../../../assets/insta-photo10-11-2023.jpg";

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
            <div className="downloadable">
                <div className="arts">
                    <div className="arts-title">Artes <span className="arts-span">(para download)</span></div>
                    <div className="arts-panel">
                        <div className="art1">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art1" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art2">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art2" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art3">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art3" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art4">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art4" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art5">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art5" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art6">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art6" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art7">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art7" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art8">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art8" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art9">
                            <a href={ exampleImage } download="imagem.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art9" src={ exampleImage } alt="Imagem"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="logos">
                    <div className="logos-content">
                        <div className="logos-title">Logos <span className="logos-span">(para download)</span></div>
                        <div className="logos-panel">
                            <div className="logo1">a</div>
                            <div className="logo2">b</div>
                            <div className="logo3">c</div>
                            <div className="logo4">d</div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Materials;
