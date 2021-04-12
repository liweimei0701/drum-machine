import React from 'react'
import './DrumPads.css'
import {Button} from 'antd-mobile'
import Data from '../../Database/Database'
export default class DrumPads extends React.Component {
  state = {
    // isPlay:true,
    // btn_backgrondColor:'#808080'
    bgc:'#808080',
  }
  playMusic = (id,content) => {
    // console.log(content);
    const {getContent,volume,changeVolumeShowToFalse} = this.props
    getContent(content)
    changeVolumeShowToFalse()
    const audio = document.getElementById(`audio${id}`)
    audio.play()
    audio.volume = volume / 100
    // this.setState({
    //   isPlay: true,
    //   // bgc:'orange',
    // })
  }
  // changeVolume = (id,value) => {
  //   const audio = document.getElementById(`audio${id}`)
  //   audio.volume = value 
  // }
  render(){
    const power = this.props.power
    // console.log(volume);
    return(
      <div id="drumPads"
      onKeyDown = {(e)=>{this.handleKeys(e)}}>
        {
          Data.map(item => 
          <Button type="warning" id={item.id} key={item.id} className="drum-pad"
          disabled={!power}
          style={{backgroundColor:this.state.bgc}}
          // onKeyPress={this.bgcChangeToOrg}
          // onKeyUp={this.bgcChangeToGrey}
          onClick={()=>this.playMusic(item.id,item.content)}>{item.id}
          <audio  id={`audio${item.id}`} src={item.music}
          // volume={volume / 100}
          ></audio>
          </Button>)
        }
      </div>
    )
  }
}