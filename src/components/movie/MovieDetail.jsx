import React, { Component } from 'react';

import {Button} from 'antd'

import { LeftOutlined } from '@ant-design/icons';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this);
        
        return <div>
            <Button icon={<LeftOutlined />} type="primary" onClick={this.goBack}>返回电影列表</Button>
            <h3>电影详情</h3>
        </div>;
    }

    goBack = () => {
        this.props.history.go(-1)
    }
}
 
export default MovieDetail;