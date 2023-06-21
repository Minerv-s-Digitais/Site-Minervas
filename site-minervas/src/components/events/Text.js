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
      <div className="Events-text">
        <div className="title">Eventos</div>
      </div>
    );
  }
}

export default Text;
