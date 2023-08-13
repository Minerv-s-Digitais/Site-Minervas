import React, { useRef } from "react"

import exampleimage from "../../assets/example-image.svg"
import photo01 from "../../assets/insta-photo01.jpg"
import photo02 from "../../assets/insta-photo02.jpg"
import photo03 from "../../assets/insta-photo03.jpg"
import photo04 from "../../assets/insta-photo04.jpg"
import photo05 from "../../assets/insta-photo05.jpg"
import photo06 from "../../assets/insta-photo06.jpg"
import photo07 from "../../assets/insta-photo07.jpg"
import photo08 from "../../assets/insta-photo08.jpg"
import photo09 from "../../assets/insta-photo09.jpg"
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
        
        <Text click={() => handleClick()}  />
        <div style={{ width: '98vw', display: 'flex', justifyContent: 'center'}}>
        <div style={{border: 'solid 2x red', width: '50%', cursor: 'pointer'}}>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo01} className="line1" alt="photo01" onClick={() => redirectToLink('https://www.instagram.com/p/CvyLVx9JO5Z/?img_index=1') }/>
            <img src={photo02} className="line1" alt="photo02" onClick={() => redirectToLink('https://www.instagram.com/p/CvLWGrIpfJn/') }/>
            <img src={photo03} className="line1" alt="photo03" onClick={() => redirectToLink('https://www.instagram.com/p/CuCr_g5rX9b/') }/>
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo04} className="line2" alt="photo04" onClick={() => redirectToLink('https://www.instagram.com/p/CtpsizaJxTx/?img_index=1') }/>
            <img src={photo05} className="line2" alt="photo05" onClick={() => redirectToLink('https://www.instagram.com/p/Csrsz-MpEsX/') }/>
            <img src={photo06} className="line2" alt="photo06" onClick={() => redirectToLink('https://www.instagram.com/p/CsHMPYqJ3bl/?img_index=1') }/>
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={photo07} className="line3" alt="photo07" onClick={() => redirectToLink('https://www.instagram.com/p/Cr3awq5rmUQ/') }/>
            <img src={photo08} className="line3" alt="photo08" onClick={() => redirectToLink('https://www.instagram.com/p/CqqbXhnJ2ws/') }/>
            <img src={photo09} className="line3" alt="photo09" onClick={() => redirectToLink('https://www.instagram.com/p/CqeTtR-r6lY/') }/>
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
