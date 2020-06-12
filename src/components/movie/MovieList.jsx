import React, { Component } from 'react';

import { Spin, Alert ,Pagination} from 'antd';

import Axios from 'axios'

import MovieItem from './MovieItem'

class MovieList extends Component {
    state = { 
        movies:[],//电影列表
        nowPage:parseInt(this.props.match.params.page),
        pageSize:12,
        total:0,
        loading:true,
        movieType:this.props.match.params.type,//要获取的电影类型
    }
    componentWillMount(){
        console.log(this);
        this.loadMovieListByTypeAndPage(this.state.movieType)
        
        // 当用fetch获取数据时 第一个.then 拿不到数据 拿到的是一个Response对象 我们可以调用response.JSON 拿到promise对象
        //
        // fetch("https://layu23.github.io/")
        // .then(res => {
        //     return res.json()
        // }) 
        // .then(data => {
        //     console.log(data);
            
        // })
    }
    render() { 
        return <div>
            {this.renderList()}
        </div>
    }

    renderList =() => {
        if(this.state.loading){
            return <Spin tip="Loading...">
            <Alert
              message="客官不要着急"
              description="好片马上呈现"
              type="info"
            />
          </Spin>
        }else{
            return <div>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {this.state.movies.map(item => {
                        return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                    })}
                    </div>
                    <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} defaultPageSize={this.state.pageSize} onChange={this.onPageChange} />
                </div>
        }
    }

    loadMovieListByTypeAndPage = (movieType) => {
        const start = this.state.pageSize * (this.state.nowPage - 1)

        const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
        Axios.get(url)
        .then(res => {
            console.log(res);
            this.setState({
                loading:false,
                movies:res.data.subjects,
                total:res.data.total
            })
        })

        // const data = require(`../../test_data/${movieType}.json`)
        // setTimeout(() => {
        //     this.setState({
        //         loading:false,
        //         movies:data.subjects,
        //         total:data.total
        //     })
        // }, 1000);

        
    }

    // props即将修改获取最新电影类型和页码值
    componentWillReceiveProps(nextProps){
        
        this.setState({
            loading:true,
            nowPage:parseInt(nextProps.match.params.page),
            movieType:nextProps.match.params.type
        },function(){
            this.loadMovieListByTypeAndPage(nextProps.match.params.type)
        })
    }

    // 页码改变时请求数据
    onPageChange = (page,pagesize) => {
        // 手动使用BOM对象实现了跳转 这样不好 最好使用编程式导航
        // window.location.href = `/#/movieList/${this.state.movieType}/${page}`
        this.props.history.push(`/movieList/${this.state.movieType}/${page}`)
    }
}
 
export default MovieList;