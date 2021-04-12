import React from 'react';
import './App.css';
import DrumPads from './components/DrumPads/DrumPads'
import Display from './components/Display/Display'
// import RippleButton from './components/RippleButton/RippleButton'

export default class App extends React.Component {
  state={
    power:true,
    content:'',
    volume:60,
    volumeShow:false
  }
  powerChange = (checked) => {
      this.setState({
        power:!checked
      })
    // console.log(this.state.power);
  }
  getContent = (content) => {
    this.setState({
      content:content
    })
  }
  controlVolume = (value) => {
    this.setState({
      volume:value
    })
  }
  changeVolumeShowToTrue = () => {
    this.setState({
      volumeShow:true
    })
  }
  changeVolumeShowToFalse = () => {
    this.setState({
      volumeShow:false
    })
  }
  render() {
    return (
      <div id="drum-machine">
        <DrumPads 
        power={this.state.power}
        volume={this.state.volume}
        getContent={this.getContent}
        changeVolumeShowToFalse={this.changeVolumeShowToFalse}
        />
        <Display 
        powerChange={this.powerChange}
        content={this.state.content}
        volume={this.state.volume}
        controlVolume={this.controlVolume}
        volumeShow={this.state.volumeShow}
        changeVolumeShowToTrue={this.changeVolumeShowToTrue}
        />
        {/* <RippleButton>Hello</RippleButton> */}
      </div>
    )
  }
}
