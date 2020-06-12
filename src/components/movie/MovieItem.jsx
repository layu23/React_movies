import React, { Component } from 'react';
import { Rate } from 'antd';
import '../../assets/css/movie_item.css'

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <div className="movie_box" onClick={this.goDetail}>
            <img src={this.props.images.large} alt=""/>
            <h4>电影名称：{this.props.title.length>5 ? this.props.title.substring(0,4)+'...' : this.props.title}</h4>
            <h4>上映年份：{this.props.year}年</h4>
            <h4>电影类型：{this.props.genres.length>2 ? this.props.genres[0]+'...' : this.props.genres.join('，')}</h4>
            <Rate disabled defaultValue={this.props.rating.average/2} />
        </div>;
    }

    goDetail = () => {
        console.log(this);
        this.props.history.push(`/movieList/detail/${this.props.id}`)
    }
}
 
export default MovieItem;