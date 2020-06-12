import React, { Component } from 'react';

import {Route,Link,Switch} from 'react-router-dom'

import { Layout, Menu} from 'antd';

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const { Content, Sider } = Layout;

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    componentWillMount(){
      
    }
    render() { 
        return <Layout className="site-layout-background" >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={window.location.hash.split('/')[2]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="in_theaters">
                <Link to="/movieList/in_theaters/1">正在上映</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
                <Link to="/movieList/coming_soon/1">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="top250">
                <Link to="/movieList/top250/1">TOP250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{padding:'10px'}}>
          {/* router 中switch匹配到了前面的路由 后面的路由就不会进入 */}
          <Switch>
            <Route path="/movieList/detail/:id" component={MovieDetail} exact></Route>
            <Route path="/movieList/:type/:page" component={MovieList} exact></Route>
            
          </Switch>
            
        </Content>
      </Layout>
    }
}
 
export default Movie;