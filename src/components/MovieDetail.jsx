import React from 'react'
import { Button,Spin, Alert} from 'antd';
import { LeftOutlined  } from '@ant-design/icons';
import fetchJsonp from 'fetch-jsonp'
import MovieDetailCss from '../css/MovieDetail.scss'
export default class MovieDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // id:this.props.match.params.id,
            infoData:[],
            isloading:true
        }
    }
    componentWillMount(){
        this.getInfoData()
    }
    getInfoData=()=>{
        fetchJsonp('https://douban.uieee.com/v2/movie/subject/'+this.props.match.params.id)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({
                infoData:data,
                isloading:false
            })
        })
    }
    renderInfo(){
        if(this.state.isloading==true){
            return <Spin tip="Loading...">
            <Alert
            message="正在请求电影列表"
            description="精彩内容马上呈现 "
            type="info"
            />
        </Spin>
        }else{
            return <div>
            <Button type="primary" icon={<LeftOutlined />} onClick={this.goBack}>
               返回电影列表
           </Button>
  
           <div className={MovieDetailCss.box}>
                <img src={this.state.infoData.images.large}/>
                <h2>剧情简介:</h2>
                <p className={MovieDetailCss.summary}>{this.state.infoData.summary}</p>
           </div>
          </div>
        }
    }
    render(){
        return <div>{this.renderInfo()}</div>
    }
    goBack=()=>{
        this.props.history.go(-1)
    }
}
