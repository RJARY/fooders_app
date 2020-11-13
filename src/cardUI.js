import React from 'react';
import './card-style.css';
import rupees from './assets/rupees.jpg';
var stor = [];
var stor1 = [];
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            total:0,
            aOperation:true,
            itemShow:false
        }
    }
    handleClick =() => {
        var totalPrice= (this.props.price)*(this.state.count);
        this.setState({total:this.state.count,itemShow:true})
        if(this.state.aOperation !== false){
        stor=totalPrice;
        stor1.push(totalPrice);
        console.log("finalPlus1 "+ stor1)
        console.log("finalPlus "+ stor)
        var acd = stor1.filter(item =>{return(item===stor)})
        console.log("acd"+acd);
        }
        else{
            if(totalPrice === 0){
                stor= 0;
                console.log(stor);
            }
            else{
            stor=totalPrice;
            stor1.push(totalPrice);
            console.log("finalMinus1 " + stor1)
            console.log("finalMinus " + stor)
            var ad = stor1.filter(item =>{return(item===stor)})
            console.log("acd"+ad);
            }
        }

    }
    incrementCount = (e) => {
        this.setState({
          count: this.state.count + 1,
          aOperation:true,
          itemShow:false
        });
        // stor = stor.slice(-1);
        console.log("incre"+ stor)
      };
    
      decrementCount = (e) => {
        if(this.state.count > 0){
            this.setState(prevState => ({count: prevState.count-1, aOperation:false,itemShow:false}))
         }
        //  stor = stor.slice(-1);
         console.log("dec"+ stor)
      };
    render(){
        let { count } = this.state;
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={this.props.imgsrc} alt="masalarice" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
            <div className="card-title" style={{marginTop:"-2.5rem"}}>{this.props.title}
            <span className="SpanTotal" >Total <img src={rupees} alt="rupees" height="20px" width="20px" />{(this.props.price)*(count)}</span>
            </div>
            <div className="card-title"><img src={rupees} alt="rupees" height="20px" width="20px" /> {this.props.price}</div>
            <div>
            <span className="btn btn-outline-success" onClick={this.decrementCount}>-</span>
            <input type="number" className="inputValue" name="count" value={count} />
            <span className="btn btn-outline-success" onClick={this.incrementCount}>+</span>
            </div><br />
            <p className="btn btn btn-outline-success" style={{backgroundColor:"#fc8019"}} onClick={this.handleClick}>Add to cart</p>
            {this.state.count !==0 ? this.state.itemShow ===true ? 
                <p><span style={{font:"bold",color:"#fc8019"}}>{this.state.count}</span> Items added in the cart</p>
            : <></>
            : <></>}
            </div>
        </div>
    );
    }
}
export default Card;