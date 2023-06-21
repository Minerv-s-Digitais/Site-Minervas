import React from "react";
import "./Text.scss";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChat: false,
    };
  }

  render() {
    return (
      <div className="Contact-text">
        <div className="title">Contato</div>
      </div>
    );
  }
}

export default Text;
