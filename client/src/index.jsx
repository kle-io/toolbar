import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import axios from 'axios';
import AudioPlayer from './components/AudioPlayer.jsx';
import Volume from './components/Volume.jsx';
import SongInfo from './components/SongInfo.jsx';
import QueuePanel from './components/QueuePanel.jsx';
import * as $ from 'jquery';

// styling for the toolbar

const Footer = window.styled.div`
position: fixed;
bottom: 0;
visibility: visible;
width: 100%;
-webkit-perspective: 900;
perspective: 900;
-webkit-perspective-origin: 80% 100%;
perspective-origin: 80% 100%;
z-index: 1;
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
        duration: '0'
      },
      queue: [],
      queueIcon: false,
      play: false,
      progress: '00:00',
      volume: false,
      songId: null,
      autoplay: false
    };

    this.onQueueClick = this.onQueueClick.bind(this);
    this.onVolumeClick = this.onVolumeClick.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onProgression = this.onProgression.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onQueueClearClick = this.onQueueClearClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onAutoplay = this.onAutoplay.bind(this);

  }

  componentDidMount() {
    let path = location.pathname;
    let songId = path.substring(0, path.length - 1);
    let { queue } = this.state;

    if (songId === '' || songId === undefined) {
      songId = Math.floor(Math.random() * 100);
      axios.get(`/api/toolbar/songs/${songId}`)
        .then(response => {
          this.setState({ currentSong: response.data });
          this.setState({ songId: songId });
          this.setState(prevState => ({
            queue: [response.data, ...prevState.queue]
          }));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      songId = songId.slice(1, songId.length);
      axios.get(`/api/toolbar/songs/${songId}`)
        .then(response => {
          this.setState({ currentSong: response.data });
          this.setState(prevState => ({
            queue: [response.data, ...prevState.queue]
          }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // functions passed to AudioPlayer
  onBack() {
    event.preventDefault();
    let { songId, queue } = this.state;
    songId = songId - 1;
    axios.get(`/api/toolbar/songs/${songId}`)
      .then(response => {
        this.setState({ currentSong: response.data });
        this.setState({ songId: songId });
        this.setState({ play: false });
        this.setState(prevState => ({
          queue: [response.data, ...prevState.queue]
        }));
        console.log(queue);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onPlay() {
    event.preventDefault();
    const { play } = this.state;
    const audio = document.getElementsByTagName('audio')[0];
    if (play) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ play: !play });
  }

  onNext() {
    event.preventDefault();
    let { songId, queue } = this.state;
    songId = songId + 1;
    axios.get(`/api/toolbar/songs/${songId}`)
      .then(response => {
        this.setState({ currentSong: response.data });
        this.setState({ songId: songId });
        this.setState({ play: false });
        this.setState(prevState => ({
          queue: [...prevState.queue, response.data]
        }));
        console.log(queue);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onShuffle() {
    event.preventDefault();
    songId = Math.floor(Math.random() * 100);
    axios.get(`/api/toolbar/songs/${songId}`)
      .then(response => {
        this.setState({ currentSong: response.data });
        this.setState({ songId: songId });
        this.setState(prevState => ({
          queue: [response.data, ...prevState.queue]
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  onProgression() {
    event.preventDefault();
    const audio = document.getElementsByClassName('myAudioPlayer')[0];
    document.getElementsByClassName('myProgressBar')[0].style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    let sec = parseInt(audio.currentTime % 60, 0);
    let min = parseInt((audio.currentTime / 60) % 60, 0);
    if (sec.toString().length === 1) {
      sec = `0${sec}`;
    }
    this.setState({
      progress: `${min}:${sec}`,
    });
  }

  // functions passed to QueueList
  onQueueClick() {
    event.preventDefault();
    const { queueIcon } = this.state;
    this.setState({ queueIcon: !queueIcon });
  }

  onQueueClearClick() {
    event.preventDefault();
    const { queueIcon } = this.state;
    this.setState({ queueIcon: !queueIcon });
    console.log(queue);
  }

  onAutoplay() {
    event.preventDefault();
    const { autoplay } = this.state;
    this.setState({ autoplay: !autoplay });
  }

  onClearClick() {
    event.preventDefault();
    this.setState(prevState => {
      let oldQueue = prevState.queue;
      let newQueue = oldQueue.slice(oldQueue.length - 1);
      return {queue: newQueue};
    });
  }

  // functions passed to Volume
  onVolumeClick() {
    event.preventDefault();
    const { volume } = this.state;
    this.setState({ volume: !volume });
  }

  render() {

    const { currentSong, progress, queue, queueIcon, volume, play, autoplay } = this.state;
    console.log(queue);

    return (
      <Footer>
        <Wrapper>
          <Toolbar className="contain" >
            <Bg></Bg>
            <AudioPlayer volume={volume} currentSong={currentSong} progress={progress} play={play} playHandler={this.onPlay} progressionHandler={this.onProgression} nextHandler={this.onNext} backHandler={this.onBack} />
            <Volume volumeClickHandler={this.onVolumeClick} volume={volume} />
            <SongInfo currentSong={currentSong} queueClickHandler={this.onQueueClick} />
            {queueIcon && <QueuePanel queue={queue} currentSong={currentSong} autoplay={autoplay} autoplayHandler={this.onAutoplay} queueClearHandler={this.onQueueClearClick} clearClickHandler={this.onClearClick}></QueuePanel>}
            <Panel></Panel>
          </Toolbar>
        </Wrapper>
      </Footer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('toolbar'));
