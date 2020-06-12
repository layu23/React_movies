import React, { Component } from 'react';
// 导入路由相关
import {HashRouter,Route,Link, Redirect} from 'react-router-dom'

//导入组件

import Home from './components/home/Home'
import Movie from './components/movie/Movie'
import About from './components/about/About'

import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css'
import './App.css'

const { Header, Content} = Layout;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      hash:'home'
      //
    }
  }

  componentWillMount(){
    console.log(window.location.hash.split('/')[1]);
    
  }

  render() { 
    return <HashRouter>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]}>
            <Menu.Item key="home">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to="/movieList/in_theaters/1">电影</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{height:'100%'}}>
          <Layout className="site-layout-background" > 
            <Content >
              <Route path="/home" component={Home}></Route>
              <Route path="/movieList" component={Movie}></Route>
              <Route path="/about" component={About}></Route>
              <Redirect from="/" to="/home" />
            </Content>
          </Layout>
        </Content>
      </Layout>,
    </HashRouter>;
  }
}


export default App;
