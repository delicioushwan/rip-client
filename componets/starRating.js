import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
 
class ToiletStarRating extends Component {
 
  constructor(props) {
    super(props);  }
 

  render() {
    console.log(this.props)
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        halfStarEnabled = {true}
        rating={this.props.starCount}
        selectedStar={(rating) => this.props.starPress(rating)}
      />
    );
  }
}
export default ToiletStarRating;