//App根组件
import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
//导入需要的antd组件
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
import AppScss from './css/App.scss'

//导入路由需要的页面
import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentWillMount(){
        
    }
    render(){
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
                {/* Header头部 */}
                <Header>
                <div className={AppScss.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={window.location.hash.split('/')[1]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
                    <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
                    <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                </Menu>
                </Header>
                {/* 中间内容区域 */}
                <Content style={{flex:1}}>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/movie' component={Movie}></Route>
                    <Route path='/about' component={About}></Route>
                </Content>
                {/* 底部区域 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by 刘平峰 <a href="http://www.beian.miit.gov.cn/" target="_blank">闽ICP备20002355号</a></Footer>
            </Layout>
        </HashRouter>
    }
}