import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import axios from 'axios';
// import styled from 'styled-components';
// import Buttons from './components/Buttons.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import Volume from './components/Volume.jsx';
import SongInfo from './components/SongInfo.jsx';
import QueuePanel from './components/QueuePanel.jsx';
import * as $ from 'jquery';

const Footer = window.styled.div`
position: fixed;
bottom: 0;
visibility: visible;
width: 100%;
-webkit-perspective: 900;
perspective: 900;
-webkit-perspective-origin: 80% 100%;
perspective-origin: 80% 100%;
z-index: 1001;
display: flex;
flex-shrink: 0;
background-color: #f2f2f2;
border-top: 1px solid #cecece;
`;

const Toolbar = window.styled.section`
-webkit-transform: translateY(0);
transform: translateY(0);
height: 48px;
`;

const Wrapper = window.styled.div`
width: 1240px;
margin: 0 auto;
padding: 0;
visibility: visible;
position: relative;
height: 100%;
margin: 0 auto;
`;

const Bg = window.styled.div`
background-color: #f2f2f2;
border-top: 1px solid #cecece;
position: absolute;
top: -1px;
left: 0;
bottom: 0;
right: 0;
`;

const Panel = window.styled.div`
position: absolute;
right: 0;
top: 0;
z-index: 0;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSong: {
        title: '',
        artist: '',
        liked: false,
        cover: '',
        song: '',
        duration: ''
      },
      data: [{
        title: '',
        artist: '',
        liked: false,
        cover: '',
        song: '',
        duration: ''
      }],
      play: true,
      progress: '00:00',
      queue: false,
      volume: false
    };

    this.onQueueClick = this.onQueueClick.bind(this);
    this.onVolumeClick = this.onVolumeClick.bind(this);
  }

  componentDidMount() {
    console.log('hi');
    axios.get('/api/toolbar/songs')
      .then(response => {
        this.setState({ 'data': response.data });
        this.setState({ 'currentSong': this.state.data[Math.floor(Math.random() * 100)] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onQueueClick() {
    const { queue } = this.state;
    this.setState({queue: !queue});
  }

  onVolumeClick() {
    const { volume } = this.state;
    this.setState({volume: !volume});
  }

  render() {

    const { currentSong, data, progress, queue, volume } = this.state;

    // if (queue) {
    //   queueComponent = <QueuePanel data={data}></QueuePanel>;
    // } else {
    //   queueComponent = <React.Fragment></React.Fragment>;
    // }

    return (
      <Footer>
        <Wrapper>
          <Toolbar className="contain" >
            <Bg></Bg>
            <AudioPlayer volume={volume} currentSong={currentSong} progress={progress} className="b" />
            <Volume volumeClickHandler={this.onVolumeClick} volume={volume}/>
            <SongInfo currentSong={currentSong} queueClickHandler={this.onQueueClick} />
            {queue && <QueuePanel data={data} currentSong={currentSong}></QueuePanel>}
            <Panel></Panel>
          </Toolbar>
        </Wrapper>
      </Footer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('toolbar'));
