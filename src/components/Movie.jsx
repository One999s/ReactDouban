import React from "react";
//导入Antd组件
import { Layout, Menu} from 'antd';
const { Header, Content, Sider } = Layout;
import {Link,Route,Switch} from 'react-router-dom'
//导入Movie需要的组件
import MovieList from '../components/MovieList.jsx'
import MovieDetail from '../components/MovieDetail.jsx'

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return  <Layout style={{height:'100%'}}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={window.location.hash.split('/')[2]}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
              <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
              <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft:'1px',background:'#fff',borderLeft:'1px solid #ddd'}}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background:'#fff'
            }}
          >
            <Switch>
            <Route exact path="/movie/subject/:id" component = {MovieDetail}></Route>
            <Route exact path="/movie/:type/:page" component={MovieList}></Route>
            </Switch>
            
          </Content>
        </Layout>
      </Layout>
    }
}