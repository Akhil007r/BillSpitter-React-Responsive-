import React, { Component } from 'react'
import TipComponent from './tip.component'

export default class Tipcontainer extends Component {
  constructor(props){
    super(props)
    this.state={
      bill:"",
      tip:0,
      people:"",
      tipAmt:"0.00",
      total:"0.00",
    }
  }
  handleCallback =(e)=>{
    const { name, value} = e.target;
    this.setState({[name]:parseInt(value)},()=>{
     this.billPerson();
    })
  }

  reset=()=>{
    this.setState({
      bill:"",
      tip: 0,
      people:0,
      tipAmt:"0.00",
      total:"0.00",
    })
  }
  billPerson =()=>{
    const tip = parseFloat(this.state.tip);
    const bill = parseFloat(this.state.bill);
    const pple = parseInt(this.state.people);
    const totTip = parseFloat((tip / 100)* bill);
    const tipPerPerson = parseFloat(totTip / pple);
    const totPerPerson = (totTip + bill) / pple ;
    if(pple >=1){
      this.setState({tipAmt:`${parseFloat(tipPerPerson)}`,
        total:`${parseFloat(totPerPerson)}`})
    }
    
    
  }
  shouldComponentUpdate(){
    return true;
 }
  billFunctions={
    handleCallback:this.handleCallback.bind(this),
    billPerson:this.billPerson.bind(this),
    reset:this.reset.bind(this)
  }
  render() {
    return (
      <div className='billContainer'>
        <TipComponent
         {...this.state}
         {...this.billFunctions}
        />
      </div>
    )
  }
}
