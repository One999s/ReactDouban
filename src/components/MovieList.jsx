import React from 'react'
//导入antd组件
import { Spin, Alert,Pagination  } from 'antd';
//导入fetch-jsonp
import fetchJsonp from 'fetch-jsonp'
//导入电影Item组件
import MovieItems from '../components/MovieItems.jsx'

export default class Zzry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],//电影列表
            nowPage:parseInt(props.match.params.page) || 1,//当前页码
            pageSize:12,//每页多少条
            total:0, //总共数据
            isloading:true,//是否正在加载
            movieType:props.match.params.type //保存获取的电影类型
        }
    }
    componentWillMount(){
        this.loadMovieList()
      }
      componentWillReceiveProps(nextProps){
          console.log(nextProps.match);
          this.setState({
              isloading:true,
              pageSize:12,
              nowPage:parseInt(nextProps.match.params.page || 1),//要获取第几页的数据
              movieType:nextProps.match.params.type,//电影类型
              total:0
          },function(){
              this.loadMovieList()
          })
      }
      loadMovieList= ()=>{
        const start = this.state.pageSize * (this.state.nowPage -1)
        const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        fetchJsonp(url)
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
          this.setState({
              isloading:false,
              movies:data.subjects,
              total:data.total
          })
        })
      }
      pageChange = (page)=>{
          console.log(page);
          this.props.history.push('/movie/'+this.state.movieType+'/'+page)
      }
    render(){
        return <div>
            {this.renderList()}
        </div>
    }
    
    renderList=()=>{
        if(this.state.isloading == true){
            return <Spin tip="Loading...">
            <Alert
            message="正在请求电影列表"
            description="精彩内容马上呈现 "
            type="info"
            />
        </Spin>
        }
        else{
            //加载完成
            return <div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movies.map(item=>{
                    return <MovieItems {...item} key={item.id} history={this.props.history}></MovieItems>
                })}
            </div>
            <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} onChange={this.pageChange} />
            </div>
        }
    }
}