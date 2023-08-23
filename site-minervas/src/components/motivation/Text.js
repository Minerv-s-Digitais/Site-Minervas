import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { redirect } from "react-router-dom"
import barras from "./../../assets/barras.svg"
import pizza from "./../../assets/Pizza.svg"

import "./Text.scss"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Lato",
    fontWeight: 300,
    backgroundColor: "#096262",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  openChat = () => {
    this.setState({
      openChat: true
    })
  }

  render(){
    const {click} = this.props
    console.log(this.props)

    return (
      <div className="motivation-text">
        <div className="title">
          Motivações
        </div>
        <div className="first-motivation">
          <img src={barras} alt="Gráfico de barras"></img>
          <div className="first-motivation-text">
          Diante das alarmantes disparidades de gênero em setores como engenharia, ciência da computação e afins, nasce o projeto "Minerv@s Digitais". Esse projeto visa fortalecer a presença feminina no âmbito tecnológico por meio de educação, mentoria e eventos inclusivos. Ao enfrentar a falta de representatividade, buscamos capacitar mulheres para romper barreiras, enriquecer a inovação e contribuir para um campo mais diversificado e igualitário, desafiando estereótipos prejudiciais e impulsionando a mudança.
          </div>
        </div>
        <div className="second-motivation">
          <div className="second-motivation-text">
            Acentuada desigualdade de gênero é evidenciada no gráfico ao lado, no qual 87.7% dos alunos de computação são homens e apenas 12.3% são mulheres. Esta disparidade pode ser atribuída a fatores como estereótipos enraizados, falta de modelos femininos e ambientes não inclusivos. Para solucionar esse problema, propomos a implementação de políticas de incentivo desde a educação básica, visando desmistificar a tecnologia e inspirar interesse nas meninas. Além disso, iniciativas como hackathons, palestras e grupos de apoio podem criar ambientes mais acolhedores, empoderando as mulheres a seguirem carreiras na computação e contribuindo para uma representação equilibrada no campo.
          </div>
          <img src={pizza} alt="Gráfico de pizza"></img>
        </div>
      </div>
    )
  }
}

export default Text
