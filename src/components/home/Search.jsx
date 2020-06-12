import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue:'man',
        }
    }
    render() { 
        return <form className="search">
            <input type="text" placeholder={this.state.searchValue} onChange={this.searchValChange} />
            <button onClick={this.postSearch}>search</button>
        </form>;
    }

    // 监听输入框值 
    searchValChange = (e) => {
        this.setState({
            searchValue:e.target.value
        })
    }
    // 搜索电影
    postSearch = () => {
        console.log('搜索');
        this.props.search(this.state.searchValue)
        this.resetSearch()
    }

    // 重置输入框
    resetSearch = () =>{
        this.setState({
            searchValue:''
        })
    }
}
 
export default Search;