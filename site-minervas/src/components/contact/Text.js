import React from "react";
import "./Text.scss";
//import phone from "../../assets/phone-draw.svg"
import mail from "../../assets/mail-draw.svg"
import insta from "../../assets/insta-icon-draw.svg"

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
            <div className="icone1-contact">
              <img className="icone1-contact" src={insta} alt='desenho do icone do insta'></img>
            </div>
            <p className="general-insta-at-sign"><a href="https://www.instagram.com/minervasdigitaisufrj/" target="_blank" rel="noreferrer">@minervasdigitaisufrj</a></p>       
          </div>
          <div className="icons-contact-collum2">
            <div className="icone2-contact">
              <img className="icone2-contact" src={mail} alt='desenho do e-mail'></img>
            </div>
            <p className="general-email-address">minervasdigitais@dcc.ufrj.br</p>       
          </div>
        </div>
        <div className="section-advisor-infos">
          <p className="title-section-infos">Professora Orientadora</p>
          <p className="name-advisor">Maria Luiza Machado Campos</p>
          <p className="email-advisor">mluiza@ppgi.ufrj.br</p>
        </div>
        <div className="section-maps-content">
        <iframe 
          title='Mapa do Google'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5175938242537!2d-43.22904841595763!3d-22.8573305930057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9979386e95f2e1%3A0x20a7d1ce2f645285!2sCentro%20de%20Ci%C3%AAncias%20Matem%C3%A1ticas%20e%20da%20Natureza%20(CCMN)%20-%20UFRJ!5e0!3m2!1spt-BR!2sbr!4v1676236261560!5m2!1spt-BR!2sbr" 
          width="600" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    );
  }
}

export default Text;
