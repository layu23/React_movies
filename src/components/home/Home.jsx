import React, { Component } from 'react';
import Search from './Search';
import Movie from './Movie'
import '../../assets/css/home.css'

const movieAPI = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // 你也可以自己写接口

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isLoading:true,
            errorMessage:null,
            movies:[]

        }
    }
    render() { 
        return <div className="home">
            <div className="home_head">YF-MOVIES</div>
            <Search search={this.searchMovies} />
            <p>These so cool movies for you</p>
            {this.loadingOrShow()}
        </div>;
    }

    componentWillMount(){
        this.getMovies()
    }

    // 获取电影数据
    getMovies = () => {
        fetch(movieAPI)
        .then(res => res.json())
        .then(res => 
            this.setState({
                movies : res.Search,
                isLoading:false
            })    
            
        )
    }

    //判断加载或展示电影
    loadingOrShow = () => {
        if(this.state.isLoading){
            return <div>
                加载中...
            </div>
        }else{
            return <div className="home_movie">
                {this.state.movies.map((item,index) => {
                    return <Movie {...item} key={index} />
                }) }
            </div>
        }
    }

    // 搜索电影
    searchMovies = (movie) =>{
        this.setState({
            isLoading:true
        })
        fetch(`https://www.omdbapi.com/?s=${movie}&apikey=4a3b711b`)
        .then(res => res.json())
        .then(res => {
            if(res.Response === 'True'){
                this.setState({
                    movies : res.Search,
                    isLoading:false
                })    
            }else{
                this.setState({
                    errorMessage : res.Error,
                    isLoading:false
                })   
            }
        })
    }
}
 
export default Home;