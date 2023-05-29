import React, {useRef} from "react"

import exampleimage from "../../assets/example-image.svg"
import Text from "./Text"
import TextField from '@material-ui/core/TextField';
import Carousel from "./Gallery.js"

import "./Content.scss"

function Partners() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      <div className="partners-content">
        <Text click={() => handleClick()}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width:'80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Carousel />
        </div>
        </div>
        
        
      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Partners
