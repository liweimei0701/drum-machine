import React from 'react'
import './Display.css'
import {Switch } from 'antd-mobile';
// import { createForm } from 'rc-form';
export default class Display extends React.Component {
  state = {
    checked: true,
    checked1: true
  };
  handleChange = () => {
    const powerChange = this.props.powerChange
    this.setState({
      checked:!this.state.checked
    })
    powerChange(this.state.checked)
  }
  handleClick = () => {
    const changeVolumeShowToTrue = this.props.changeVolumeShowToTrue
    changeVolumeShowToTrue()
  }
  render(){
    const {content,volume,controlVolume} = this.props
    const volumeAmount = 'volume:' + volume
    return (
      <div id="display">
          <div className="power">
            <p>Power</p>
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              initialValue= 'true'
              valuePropName='checked'
              platform="android"
              color="black"
          />
          </div>
          <div className="displayBox">{this.props.volumeShow?volumeAmount:content}</div>
          <input 
              type="range" 
              className="volume"
              onClick={this.handleClick}
              onChange={(e) => controlVolume(e.target.value)} 
              value={volume} 
          />
         <div className="bank">
           <p>Bank</p>
           <Switch
              checked={this.state.checked1}
              onChange={() => {
              this.setState({
                checked1: !this.state.checked1,
              });
              }}
              initialValue= 'true'
              valuePropName='checked'
              platform="android"
              color="black"
          />
         </div>
      </div>
    )
  }
}