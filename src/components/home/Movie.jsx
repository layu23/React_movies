import React, { Component } from 'react';

// 默认图片
const DEFAULT_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <div className="home_movie_item">
            <h2>{this.props.Title}</h2>
            <img src={this.props.Poster ? this.props.Poster : DEFAULT_IMAGE} alt=""/>   
            <h3>{this.props.Year}</h3>
        </div>;
    }
}
 
export default Movie;