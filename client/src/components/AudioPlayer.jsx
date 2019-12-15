import React from 'react';
// // import styled from 'styled-components';
import * as $ from 'jquery';

const PlayControlElements = window.styled.span`
display: flex;
position: relative;
height: 100%;
visibility: visible;
`;

const Back = window.styled.button`
// background-position: 40%;
padding: 0;
width: 24px;
height: 100%;
margin: 0 0 0 12px;
border: 0;
text-shadow: none;
background-color: transparent;
-webkit-appearance: button;
cursor: pointer;
`;

const Play = window.styled.button`
padding: 0;
// background: no-repeat 55%;
width: 24px;
height: 100%;
margin: 0 0 0 12px;
border: 0;
text-shadow: none;
background-color: transparent;
-webkit-appearance: button;
cursor: pointer;
`;

const Forward = window.styled.button`
// background-position: 40%;
padding: 0;
width: 24px;
height: 100%;
margin: 0 0 0 12px;
border: 0;
text-shadow: none;
background-color: transparent;
-webkit-appearance: button;
cursor: pointer;
`;

const Shuffle = window.styled.button`
padding: 0;
width: 24px;
height: 100%;
margin: 0 0 0 12px;
border: 0;
text-shadow: none;
background-color: transparent;
-webkit-appearance: button;
cursor: pointer;
`;

const Repeat = window.styled.button`
padding: 0;
width: 24px;
height: 100%;
margin: 0 0 0 12px;
border: 0;
text-shadow: none;
background-color: transparent;
-webkit-appearance: button;
cursor: pointer;
`;

const Timeline = window.styled.div`
margin-right: 5px;
flex-grow: 1;
display: flex;
font-size: 11px;
padding-bottom: 10px;
visibility: visible;
position: relative;
height: 100%;
bottom: 0;
width: 100%;
-webkit-perspective: 900;
perspective-origin: 80% 100%;
`;

const TimePassed = window.styled.div`
width: 50px;
height: 46px;
color: #f50;
text-align: right;
line-height: 46px;
display: block;
`;

const Playback = window.styled.div`
position: relative;
flex-grow: 1;
margin-right: 12px
padding: 10px 0;
margin: 13px 10px 0;
line-height: 46px;
display: block;
font-size: 11px;
`;

const PlaybackBar = window.styled.div`
width: 100%;
height: 1px;
background-color: #ccc;
position: absolute;
display: block;
`;

const ProgressBar = window.styled.div`
min-width: 0px;
height: 1px;
background-color: #f50;
`;

const ProgressHandle = window.styled.div`
left: 22.8516%;
border: 1px solid #f50;
border-radius: 100%;
height: 8px;
width: 8px;
background-color: #f50;
box-sizing: border-box;
margin-top: -4px;
margin-left: -4px;
opacity: 0;
// transition: opacity .15s;
// font: 0/0 a;
text-shadow: none;
color: transparent;
`;

const TotalTime = window.styled.div`
width: 50px;
height: 46px;
color: #333;
text-align: left;
cursor: pointer;
line-height: 46px;
display: block;
`;

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      progress: '00:00'
    };

    this.onPlay = this.onPlay.bind(this);
    this.onProgression = this.onProgression.bind(this);
  }


  onPlay() {
    event.preventDefault();
    const { playing } = this.state;
    // const playButton = document.getElementsByClassName();
    const audio = document.getElementsByTagName('audio')[0];
    if (playing) {
      console.log('pausing');
      audio.pause();
    } else {
      console.log('playing');
      audio.play();
    }
    // this.setState({ playing: !playing });
    console.log(playing);
  }

  onProgression() {
    event.preventDefault();
    // console.log(myProgressBar);
    const audio = document.getElementsByTagName('audio')[0];
    document.getElementsByClassName('myProgressBar')[0].style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    let sec = parseInt(audio.currentTime % 60, 0);
    let min = parseInt((audio.currentTime / 60) % 60, 0);
    if (sec.toString().length === 1) {
      sec = `0${sec}`;
    }
    if (min.toString().length === 1) {
      min = `0${min}`;
    }
    console.log(`${min}:${sec}`);
    // this.setState({
    //   progress: `${min}:${sec}`,
    // });
  }

  render() {

    const { progress, progressionHandler, List, currentSong, playHandler } = this.props;

    const minutes = Math.floor(currentSong.duration / 60) % 60;
    const seconds = Math.floor(currentSong.duration) % 60;

    return (
      <React.Fragment>
        <PlayControlElements>
          <audio ref={ref => this.player = ref} src={currentSong.song} onTimeUpdate={() => this.onProgression()}></audio>
          <Back><i className="fas fa-step-backward fa-lg"></i></Back>
          <Play onClick={() => this.onPlay()}><i className={`fas fa-${this.state.playing ? 'pause' : 'play'} fa-lg`}></i></Play>
          <Forward><i className="fas fa-step-forward fa-lg"></i></Forward>
          <Shuffle><i className="fas fa-random fa-lg"></i></Shuffle>
          <Repeat><i className="fas fa-circle-notch fa-lg"></i></Repeat>
        </PlayControlElements>
        <Timeline className="music">
          <TimePassed>
            <span className="songStart">{progress}</span>
          </TimePassed>
          <Playback>
            <ProgressBar className="myProgressBar">
            </ProgressBar>
            <PlaybackBar>
            </PlaybackBar>
            <ProgressHandle >
            </ProgressHandle>
          </Playback>
          <TotalTime className="songEnd">{`${minutes}:${seconds}`}</TotalTime>
          <div className="songProgression">
          </div >
        </Timeline>
      </React.Fragment>
    );
  }
}

export default AudioPlayer;
