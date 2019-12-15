import React from 'react';
// import styled from 'styled-components';
import VolumeSlider from './VolumeSlider.jsx';

const Wrapper = window.styled.div`
position: relative;
`;

const VolumeButton = window.styled.div`
margin: 0 0 0 12px;
display: block;
padding-bottom: 10px;
visibility: visible;
width: 24px;
height: 46px;
-webkit-perspective: 900;
perspective-origin: 80% 100%;
cursor: pointer;
margin-right: 24px;
margin-top: 15px;
`;

const Volume = ({ volume, volumeClickHandler }) => {

  return (
    <Wrapper>
      <VolumeButton onClick={() => volumeClickHandler()}>
        <i className="fas fa-volume-up fa-lg"></i>
      </VolumeButton>
      {volume && <VolumeSlider></VolumeSlider>}
    </Wrapper>

  );

};

export default Volume;


