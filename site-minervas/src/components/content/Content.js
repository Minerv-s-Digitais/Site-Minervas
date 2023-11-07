import React, {useRef} from "react"

import HomeImagem from "../../assets/HomeIMG.svg"
import HomeImagemMobile from "../../assets/girl2-mobile.svg"
import Text from "./Text"

import "./Content.scss"

function Content() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (

    <div className="home">
        <Text click={() => handleClick()}/>
        <img src={HomeImagem} className="imagem" alt="imagem-da-tela-home" />
        <img src={HomeImagemMobile} className="imagem-mobile" alt="imagem-da-tela-home" />
    </div>
  )
}

export default Content
