import React from "react"
import "./Text.scss"


class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  render(){
    return (
      <div className="text">
        <div className="title">
          Minerv@s nas redes
        </div>
      </div>
    )
  }
}

export default Text
