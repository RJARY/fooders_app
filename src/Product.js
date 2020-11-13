import React, { Component } from 'react';
import Card from './cardUI';
import masalaRice from './assets/masalaRice.jpg';
import shejwanRice from './assets/shejwanRice.jpg';
import jeeraRice from './assets/jeeraRice.jpg';
import greenRice from './assets/greenRice.jpg';
import dalKhichadi from './assets/dalKhichadi.jpg';
import steamRice from './assets/steamRice.jpg';
import rupees from './assets/rupees.jpg';
import Bill from './Bill';

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            price1:80,
            price2:100,
            price3:200,
            price4:200,
            price5:90,
            price6:70,
        }
    }
    render(){
        return(
            <div>
            <p className="btn btn btn-outline-success" style={{backgroundColor:"#fc8019",margin:"2rem 2rem -1rem 1rem"}} onClick={()=>{<Bill/>}}>Go to cart</p>
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4"><Card imgsrc={masalaRice} title="Masala Rice" price ={this.state.price1} /></div>
                <div className="col-md-4"><Card imgsrc={shejwanRice} title="Shejwan Rice" price ={this.state.price2} /></div>
                <div className="col-md-4"><Card imgsrc={jeeraRice} title="Jeera Rice" price ={this.state.price3} /></div>
                <div className="col-md-4"><Card imgsrc={greenRice} title="Green Rice" price ={this.state.price4} /></div>
                <div className="col-md-4"><Card imgsrc={dalKhichadi} title="Dal Khichadi" price ={this.state.price5} /></div>
                <div className="col-md-4"><Card imgsrc={steamRice} title="Steam Rice" price ={this.state.price6} /></div>
            </div>
            </div>
            </div>
        )
    }
}