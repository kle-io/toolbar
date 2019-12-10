import React from 'react';
import styled from 'styled-components';

const VolumeSlider = ({ List, Toolbar }) => {

  const Wrapper = styled.div`
  height: 118px;
  border-color: #ccc;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  overflow: initial;
  position: absolute;
  left: 4px;
  bottom: 40px;
  z-index: 1;
  width: 30px;
  transition: height .1s;
  transform: translateZ(0);
  background-color: #f2f2f2;
  border: 1px solid transparent;
  outline: 0;
  cursor: pointer;
  display: block;
  `;

  const Background = styled.div`
  opacity: 0;
  transition: opacity .1s linear;
  transition-delay: .1s;
  position: absolute;
  display: block;
  background-color: #ccc;
  bottom: 13px;
  left: 0;
  height: 92px;
  width: 2px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  outline: 0;
  margin-left: 20px;
  `;

  const Progress = styled.div`
  height: 92px;
  // opacity: 0;
  // transition: opacity .1s linear;
  // transition-delay: .1s;
  background: #f50;
  bottom: 13px;
  position: absolute;
  width: 2px;
  margin-left: 14px;
  `;

  const SliderHandle = styled.div`
  top: 10px;
  // opacity: 0;
  // transition: opacity .1s linear;
  // transition-delay: .1s;
  position: absolute;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #f50;
  margin-left: 11px;
  top: 2;
  `;

  return (
    <Wrapper>
      <Background>
      </Background>
      <Progress>
      </Progress>
      <SliderHandle>
      </SliderHandle>
    </Wrapper>
  );
};

export default VolumeSlider;