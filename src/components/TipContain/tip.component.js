import React, { Component } from "react";
import "./tip.scss";
import dollar from "../../utils/images/icon-dollar.svg";
import person from "../../utils/images/icon-person.svg";

export default class TipComponent extends Component {
  render() {
    const{people,tipAmt,total,reset,bill}=this.props
    return (
      <div className="main">
        <div className="A">
          <div className="divA">
            <p>Bill</p>
            <input className="NumInp" type="number" name="bill"  onChange={this.props.handleCallback}placeholder="0" value={bill}/>
            <img className="icon" alt="" src={dollar} aria-hidden="true" />
          </div>
          <div className="divAButton">
            <p>Select Tip %</p>
            <div className="btns" >
              <button name="tip" onClick={this.props.handleCallback} value="5" >5%</button>
              <button name="tip" onClick={this.props.handleCallback} value="10">10%</button>
              <button name="tip" onClick={this.props.handleCallback} value="15">15%</button>
              <button name="tip" onClick={this.props.handleCallback} value="25">25%</button>
              <button name="tip" onClick={this.props.handleCallback} value="50">50%</button>
              <input  name="tip" type="number" placeholder="Custom" onChange={this.props.handleCallback} />
            </div>
          </div>
          <div className="divA divB">
            <div className="disperr">
              <p>Number Of People</p>
              <p className={people === 0?"err":"erre"}>Can't be zero</p>
            </div>
            <input  className={people === 0?"NumInp errIn ":"NumInp "} type="input" name="people" onChange={this.props.handleCallback} placeholder="0" value={people}/>
            <img className="icon i" src={person} alt=" " aria-hidden="true" />
          </div>
        </div>
        <div className="B">
          <div className="contBwrapper">
          <div className="contB">
              <div className="content">
                <h5>Tip Amount</h5>
                <p>/ person</p>
              </div>
              <div className="Amt">
                <label >$<span className="Calculatedamt">{`${(tipAmt.slice(0,5))}`}</span></label>
              </div>
          </div>
          <div className="contB">
              <div className="content">
                <h5>Total</h5>
                <p>/ person</p>
              </div>
              <div className="Amt">
                <label >$<span className="Calculatedamt">{`${(total.slice(0,5))}`}</span></label>
              </div>
          </div>
          </div>
         
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
}
