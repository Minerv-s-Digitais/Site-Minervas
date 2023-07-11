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
        <div className="section-icons-contact"> 
          <div className="icons-contact-collum1">
            <div className="icone1-contact"></div>
            <p className="general-phone-number">(22)9999-9999</p>       
          </div>
          <div className="icons-contact-collum2">
            <div className="icone2-contact"></div>
            <p className="general-email-address">email@ufrj.com</p>       
          </div>
        </div>
        <div className="section-advisor-infos">
          <p className="title-section-infos">Professora Orientadora</p>
          <p className="name-advisor">Maria Luiza Machado Campos</p>
          <p className="email-advisor">mluiza@ppgi.ufrj.br</p>
          <div className="advisor-icons-contact">
            <div className="advisor-icons1"></div>
            <div className="advisor-icons2"></div>
            <div className="advisor-icons3"></div>
          </div>
        </div>
        <div className="section-maps-content"></div>

      </div>
    );
  }
}

export default Text;
