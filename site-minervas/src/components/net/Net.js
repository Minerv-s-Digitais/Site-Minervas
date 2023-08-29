import React, { useRef } from "react"

import exampleimage from "../../assets/example-image.svg"
import photo18082023 from "../../assets/insta-photo18-08-2023.jpg"
import photo10082023 from "../../assets/insta-photo10-08-2023.jpg"
import photo26072023 from "../../assets/insta-photo26-07-2023.jpg"
import photo28062023 from "../../assets/insta-photo28-06-2023.jpg"
import photo18062023 from "../../assets/insta-photo18-06-2023.jpg"
import photo25052023 from "../../assets/insta-photo25-05-2023.jpg"
import photo11052023 from "../../assets/insta-photo11-05-2023.jpg"
import photo05052023 from "../../assets/insta-photo05-05-2023.jpg"
import photo05042023 from "../../assets/insta-photo05-04-2023.jpg"
import Text from "./Text"

import "./Net.scss"

function Net() {
  const ref = useRef(null);

  const redirectToLink = (link) => {
    window.open(link, '_blank')
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div className="net-content">
        {/* Ter cuidado de, na hora de atualizar o conteúdo, passar o link de uma determinada linha para a linha de baixo, 
        e na primeira linha colocar o link da foto nova no Instagram. Além do link, atualizar também as 'src'. */}
        <Text click={() => handleClick()}  />
        <div style={{ width: '98vw', display: 'flex', justifyContent: 'center'}}>
        <div style={{border: 'solid 2x red', width: '50%', cursor: 'pointer'}}>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo18082023} className="line1" alt="photo01" onClick={() => redirectToLink('https://www.instagram.com/p/CwGkaa_JI5H/') }/>
            <img src={photo10082023} className="line1" alt="photo02" onClick={() => redirectToLink('https://www.instagram.com/p/CvyLVx9JO5Z/?img_index=1') }/>
            <img src={photo26072023} className="line1" alt="photo03" onClick={() => redirectToLink('https://www.instagram.com/p/CvLWGrIpfJn/') }/>
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo28062023} className="line2" alt="photo04" onClick={() => redirectToLink('https://www.instagram.com/p/CuCr_g5rX9b/') }/>
            <img src={photo18062023} className="line2" alt="photo05" onClick={() => redirectToLink('https://www.instagram.com/p/CtpsizaJxTx/?img_index=1') }/>
            <img src={photo25052023} className="line2" alt="photo06" onClick={() => redirectToLink('https://www.instagram.com/p/Csrsz-MpEsX/') }/>
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo11052023} className="line3" alt="photo07" onClick={() => redirectToLink('https://www.instagram.com/p/CsHMPYqJ3bl/?img_index=1') }/>
            <img src={photo05052023} className="line3" alt="photo08" onClick={() => redirectToLink('https://www.instagram.com/p/Cr3awq5rmUQ/') }/>
            <img src={photo05042023} className="line3" alt="photo09" onClick={() => redirectToLink('https://www.instagram.com/p/CqqbXhnJ2ws/') }/>
          </div>
        </div>

        </div>
        


      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Net
