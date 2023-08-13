import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import exampleimage from '../../assets/example-image.svg'
import logoManamano from '../../assets/logo-manamano.jpg'
import logoEducaDigital from '../../assets/logo-educa-digital.png'
// import logoSesc from '../../assets/logo-sesc.png'
import logoTangua from '../../assets/logo-tangua.png'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import './Gallery.scss'

const ColorButton = withStyles(() => ({
  root: {
    textTransform: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0, 
    width: '251px',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontWeight: 300,
    backgroundColor: '#ffbd59',
    '&:hover': {
      backgroundColor: '#13BADE',
      fontWeight: 'bold',
    },
  },
}))(Button)

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openChat: false,
    }
  }

  responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    98: { items: 4 },
  }

  openChat = () => {
    this.setState({
      openChat: true,
    })
  }

  handleClick1(){
    window.open('https://educadigital.org.br/', '_blank');
  }

  handleClick2(){
    window.open('http://manamano.org.br/', '_blank');
  }

  handleClick3(){
    window.open('https://tangua.rj.gov.br/home/', '_blank');
  }
  

  render() {
    const { click } = this.props
    console.log(this.props)

    const handleDragStart = (e) => e.preventDefault()

    const items = [
      <div className="item" data-value="1">
        <img
          style={{ width: '250px'}}
          src={logoEducaDigital}
          onDragStart={handleDragStart}
          role="presentation"
          alt="Educa Digital"
        />
        <ColorButton
          variant="contained"
          className="button"S
          disableElevation
          onClick={this.handleClick1}
        >
          Educa Digital
        </ColorButton>
      </div>,
      <div className="item" data-value="2">
        <img
          style={{ width: '250px', height: '250px'}}
          src={logoManamano}
          onDragStart={handleDragStart}
          role="presentation"
          alt="ManaMano"
        />
        <ColorButton
          variant="contained"
          className="button"
          disableElevation
          onClick={this.handleClick2}
        >
          ManaMano
        </ColorButton>
      </div>,
      <div className="item" data-value="3">
        <img
          style={{ width: '250px'}}
          src={logoTangua}
          onDragStart={handleDragStart}
          role="presentation"
          alt="Tanguá"
        />
        <ColorButton
          variant="contained"
          className="button"
          disableElevation
          onClick={this.handleClick3}
        >
          Prefeitura de Tanguá
        </ColorButton>
      </div>,
    ]

    return (
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={this.responsive}
        controlsStrategy="alternate"
      />
    )
  }
}

export default Carousel
