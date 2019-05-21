import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
 
class ToiletStarRating extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        halfStarEnabled = {true}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}
export default ToiletStarRating;