import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';
import axios from 'axios';
//import g1 from '';

const imgUrls = [
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };


    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount() {
    console.log('Carousel mounted');

    axios({
      method: 'get',
      url: 'http://localhost:8080/image',
      responseType: 'image'
    })
      .then(function (response) {
       console.log(response)
      });

  }


  previousSlide() {

    const lastIndex = imgUrls.length -1;
    const { currentImageIndex } = this.state;
    const shouldReset = lastIndex === currentImageIndex;
    const index = shouldReset ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {

    const lastIndex = imgUrls.length -1;
    const {currentImageIndex} = this.state;
    const shouldReset = lastIndex === currentImageIndex;
    const index = shouldReset ? 0 : currentImageIndex +1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
      <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />

      <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

      <Arrow
        direction="right"
        clickFunction={ this.nextSlide }
        glyph="&#9654;" />
      </div>

    );
  }
}



export default App;