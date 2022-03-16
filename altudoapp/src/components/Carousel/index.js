import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      carouselList: [],
    };
  }
  componentDidMount = () => {
    fetch('/altudoapi/GetFullBleedImageFromArticle')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            carouselList: result,
            error: null,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  };

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.carouselList.map((carouselItem) => (
            <div key={carouselItem.CoroselTitle}>
              <img src={carouselItem.CoroselImageUrl} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
