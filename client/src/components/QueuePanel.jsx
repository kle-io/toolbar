import React from 'react';
import styled from 'styled-components';
import QueueList from './QueueList.jsx';

const QueuePanel = ({ data }) => {

  const Wrapper = styled.div`
  pointer-events: auto;
  transform: translateY(0);
  opacity: 1;
  transition-duration: .35s;
  transition-timing-function: cubic-bezier(0,0,0,1.2);
  position: absolute;
  bottom: 54px;
  right: 0px;
  width: 480px;
  // transition-property: transform,opacity,-webkit-transform;
  // transition-duration: .2s;
  // transition-timing-function: cubic-bezier(.66,-.41,1,1);
  // transform: translateY(100px);
  pointer-events: none;
  // opacity: 0;
  height: 660px;
  max-height: calc(100vh - 120px);
  `;

  const Queue = styled.div`
  height: 100%;
  position: relative;
  box-shadow: 0 0 4px rgba(0,0,0,.25);
  background-color: #fff;
  user-select: none;
  `;

  const Panel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  padding: 9px 24px;
  height: 64px;
  `;

  const Title = styled.div`
  cursor: pointer;
  flex-grow: 1;
  line-height: 46px;
  font-size: 16px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  `;

  const ClearButton = styled.button`
  margin-right: 16px;
  display: inline-block;
  position: relative;
  height: 26px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;
  `;

  const HideQueue = styled.button`
  height: 46px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  border: 0;
  text-shadow: none;
  background-color: transparent;
  background: none;
  transition: none;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 3px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  display: inline-block;
  position: relative;
  `;

  const ScrollSection = styled.div`
  overflow: hidden !important;
  top: 64px;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  `;

  const ScrollSectionContainer = styled.div`
  height: 185px;
  overflow-x: hidden;
  width: 480px;
  padding-right: 30px;
  overflow-x: hidden;
  overflow-y: scroll;
  overflow: scroll;
  `;

  const SongsContainer = styled.div`
  background-size: 100% 2016px, auto;
  height: 185px;
  background-position: 0px 0px, 0px 0px;
  `;

  const Songs = styled.div`

  `;

  return (
    <Wrapper>
      <Queue>
        <Panel>
          <Title>Next Up</Title>
          <ClearButton>Clear</ClearButton>
          <HideQueue><i className="fas fa-times fa-lg"></i></HideQueue>
        </Panel>
        <ScrollSection>
          <ScrollSectionContainer>
            <SongsContainer>
              <QueueList data = {data}/>
            </SongsContainer>
          </ScrollSectionContainer>
        </ScrollSection>
      </Queue>
    </Wrapper>
  );

};

export default QueuePanel;