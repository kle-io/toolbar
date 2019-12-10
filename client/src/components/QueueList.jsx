import React from 'react';
import styled from 'styled-components';

const QueueList = ({ data }) => {

  const Wrapper = styled.div`
  transform: translateY(240px);
  position: relative;
  `;

  const ItemWrapper = styled.div`
  transform: translate(0px, -240px);
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: block;
  `;

  const ItemWrapperTwo = styled.div`
  background: #f8f8f8;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  -webkit-user-drag: element;
  user-select: none;
  `;

  // const Dragger = styled.div`
  // align-items: center;
  // border: 0;
  // width: 24px;
  // height: 48px;
  // margin-left: -24px;
  // cursor: pointer;
  // flex-shrink: 0;
  // text-align: center;
  // `;

  const QueueCover = styled.div`
  position: relative;
  margin-right: 7px;
  `;

  const Cover = styled.img`
  height: 32px;
  width: 32px;
  background-image: linear-gradient(135deg,#8e8485,#70929c);
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
  `;

  const RealCover = styled.div`
  width: 32px;
  height: 32px;
  opacity: 1;
  `;

  const QueueDetails = styled.div`
  opacity: .5;
  overflow: hidden;
  flex-grow: 1;
  `;

  const QueueArtistAndTitle = styled.div`
  color: #999;
  display: flex;
  `;

  const Artist = styled.div`
  color: #999;
  text-decoration: none;
  flex: 0 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  cursor: pointer;
  `;

  const BasedOn = styled.div`
  color: #999;
  text-decoration: none;
  flex: 1 1 50%;
  // display: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  cursor: pointer;
  `;

  const Title = styled.div`
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  display: block;
  `;

  const Duration = styled.div`
  text-align: right;
  line-height: 36px;
  min-width: 52px;
  color: #999;
  font-weight: 100;
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  display: block;
  `;

  const Autoplay1 = styled.div`
  transform: translate(0px, -192px);
  height: 120px;
  padding-top: 16px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  `;

  const Autoplay2 = styled.div`
  height: 100%;
  box-sizing: border-box;
  `;

  const Autoplay3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 100%;
  border-top: 1px solid #e5e5e5;
  `;

  const Autoplay4 = styled.div`
  width: 330px;
  `;

  const Station = styled.div`
  line-height: 32px;
  font-size: 18px;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  `;

  const Selection = styled.div`
  line-height: 20px;
  color: #999;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  font-size: 14px;
  `;

  const Label = styled.label`
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 29px;
  border: 2px solid #e5e5e5;
  border-radius: 14px;
  transition: all .2s;
  position: relative;
  background: #e5e5e5;
  cursor: pointer;
  user-select: none;
  `;

  const Toggler = styled.span`
  left: 20px;
  position: absolute;
  z-index: 1;
  left: -1px;
  top: -1px;
  width: 27px;
  height: 27px;
  background: #fff;
  display: block;
  border-radius: 50%;
  transition: all .2s;
  `;

  const ToggleText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  // overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  `;

  return (
    <Wrapper>
      <ItemWrapper>
        <ItemWrapperTwo>
          {/* <Dragger><i className="fas fa-ellipsis-v fa-lg"></i></Dragger> */}
          <QueueCover>
            <Cover src={data[0].cover}></Cover>
          </QueueCover>
          <QueueDetails>
            <QueueArtistAndTitle>
              <Artist>{data[0].artist}</Artist>
              <BasedOn>&nbsp;- From your history</BasedOn>
            </QueueArtistAndTitle>
            <Title>{data[0].title}</Title>
          </QueueDetails>
          <Duration>3:44</Duration>
        </ItemWrapperTwo>
      </ItemWrapper>
      <Autoplay1>
        <Autoplay2>
          <Autoplay3>
            <Autoplay4>
              <Station>Autoplay Station</Station>
              <Selection>Hear related tracks based on what's playing now.</Selection>
            </Autoplay4>
            <div>
              <Label>
                <Toggler>
                  <ToggleText>Enabel Autoplay</ToggleText>
                </Toggler>
              </Label>
            </div>
          </Autoplay3>
        </Autoplay2>
      </Autoplay1>
    </Wrapper>

  );

};

export default QueueList;