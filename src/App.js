import React, { Component } from 'react';
import { Col, Row, Container, Jumbotron , Header} from "./Grid";
import Image from "./Images";
import ImgLinks from "./Images/imglinks";
import './App.css';

class App extends Component {

  state = {
    links: [],
    currentScore: 0,
    highScore: 0,
    guessed: ["Item"],
    badGuess: false
  };

  componentDidMount() {
    this.loadImages();
  }

  shuffleArray = (ImgLinks) => {
    for (let i = 0; i < ImgLinks.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ImgLinks[i];
      ImgLinks[i] = ImgLinks[j];
      ImgLinks[j] = temp;
    }
    this.setState({ links: ImgLinks });
  }

  loadImages = () => {
   this.shuffleArray(ImgLinks);
   console.log("Welcome")
  };

  badGuess = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore })
    }
    this.setState({ guessed: ["Item"] });
    this.setState({ currentScore: 0 })
    this.alertLose();
  }

  alertLose = () => {
    alert("Whoops! You've already selected him, try again!!")
  }

  handleImageClick = event => {
    console.log(event.target.id)
    let userGuess = event.target.id;
    console.log(`${userGuess} was clicked`)
    console.log(this.state.guessed)
    for (let l=-1; l<this.state.guessed.length; l++) {
      if (userGuess === this.state.guessed[l]) {
        this.badGuess();
        return;
      } else {
        this.setState({currentScore: this.state.currentScore + 1})
        var joined = this.state.guessed.concat(userGuess);
        this.setState({ guessed: joined })
        this.loadImages();
      }
    }
  };


  render() {
    return ( 

      <Container fluid>
        <Header 
        current={this.state.currentScore}
        high={this.state.highScore}
        />
        <Jumbotron>
          <h2>MLS Memory Game!!</h2>
          <h2 className="mx-auto">Click on a Player to select them for your squad. But don't select the same player twice!!</h2>
        </Jumbotron>
        <Row width="100" id="background">
          <Col size="12">
          {this.state.links.map(img => (

                  <Image key={img.name} src={img.href} onClick={this.handleImageClick} id={img.name}/>

  
                ))}

          </Col>

        </Row>

      </Container>

    );
  }
}

export default App;
