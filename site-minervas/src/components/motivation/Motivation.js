import React, {useRef} from "react"
import Text from "./Text"

import "./Content.scss"

function Motivation() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
      <div className="motivation-content">
        <Text click={() => handleClick()}/>
      </div>
  )
}

export default Motivation
