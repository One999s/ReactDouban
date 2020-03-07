import React from 'react'
import { Rate } from 'antd';
import MovieItemsCss from '../css/Movie_item.scss'
export default class MovieItems extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    goDetail = ()=>{
        this.props.history.push('/movie/subject/'+this.props.id)
    }
    render(){
        return  <div className={MovieItemsCss.box} onClick={this.goDetail}>
            <img src={this.props.images.small} className={MovieItemsCss.img}/> {/*.replace('img3.doubanio.com','img1.doubanio.com')*/}
            <h4 className={MovieItemsCss.name} title={this.props.title}>电影名称:{this.props.title}</h4>
            <h4>上映年份:{this.props.mainland_pubdate.split('-')[0]}</h4>
            <h4>电影类型:{this.props.genres.join('，')}</h4>
            <Rate disabled defaultValue={this.props.rating.average/2} />
      </div>
    }
}