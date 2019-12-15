import React from 'react';
// import styled from 'styled-components';

const Wrapper = window.styled.div`
box-sizing: border-box;
width: 360px;
height: 48px;
padding: 0 8px;
z-index: 1;
display: block;
`;

const InnerWrapper = window.styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const AlbumPhoto = window.styled.a`
color: #38d;
text-decoration: none;
margin: 0 10px 0 0;
float: left;
cursor: pointer;
`;

const Photo = window.styled.div`
height: 30px;
width: 30px;
display: block;
background-image: linear-gradient(135deg,#70929c,#846170);
text-align: center;
position: relative;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
`;

const PhotoWrapper = window.styled.img`
background-image: url(${(currentSong) => currentSong.cover});
width: 30px;
height: 30px;
opacity: 1;
`;

const Info = window.styled.div`
width: 250px;
flex-grow: 1;
line-height: 1.5em;
display: block;
`;

const Title = window.styled.span`
color: #999;
font-size: 11px;
line-height: 16px;
display: flex;
width: 100%;
height: 17px;
align-items: center;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: normal;
`;

const Artist = window.styled.span`
display: flex;
width: 100%;
height: 17px;
align-items: center;
width: 250px;
flex-grow: 1;
line-height: 1.5em;
font-size: 11px;
color: #666;
text-decoration: none;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: normal;
`;

const Actions = window.styled.div`
margin-left: 7px;
display: flex;
`;

const Buttons = window.styled.button`
min-width: 25px;
padding: 12px;
border: 0;
background: transparent;
cursor: pointer;
display: inline-block;
margin: 0;
border-radius: 3px;
white-space: nowrap;
`;

const Button2 = window.styled.button`
min-width: 25px;
padding: 0px;
border: 0;
background: transparent;
cursor: pointer;
display: inline-block;
margin: 0;
border-radius: 3px;
white-space: nowrap;
`;

const SongInfo = ({ currentSong, queueClickHandler }) => {

  return (
    <Wrapper >
      <InnerWrapper>

        <AlbumPhoto>
          <Photo>
            <PhotoWrapper src={currentSong.cover} currentSong={currentSong}>
            </PhotoWrapper>
          </Photo>
        </AlbumPhoto>

        <Info>
          <Title>{currentSong.title}</Title>
          <Artist>{currentSong.artist}</Artist>
        </Info>

        <Actions>
          <Buttons><i className="fas fa-heart fa-lg"></i></Buttons>
          <Button2 onClick={() => queueClickHandler()}><i className="fas fa-bars fa-lg"></i></Button2>
        </Actions>


      </InnerWrapper>
    </Wrapper>
  );
};

export default SongInfo;