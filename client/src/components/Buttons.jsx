import React from 'react';
// import styled from 'styled-components';

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

class Buttons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { playHandler, currentSong } = this.props;

    return (
      <PlayControlElements>
        <audio className="audio" id="audio" src={currentSong.song} onTimeUpdate={() => progressionHandler()}></audio>
        <Back><i className="fas fa-step-backward fa-lg"></i></Back>
        <Play><i className="fas fa-play fa-lg" onClick={playHandler} ></i></Play>
        <Forward><i className="fas fa-step-forward fa-lg"></i></Forward>
        <Shuffle><i className="fas fa-random fa-lg"></i></Shuffle>
        <Repeat><i className="fas fa-circle-notch fa-lg"></i></Repeat>
      </PlayControlElements>
    );
  }
}

export default Buttons;