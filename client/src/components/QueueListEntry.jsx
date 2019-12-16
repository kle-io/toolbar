import React from 'react';

const ItemWrapper1 = window.styled.div`
transform: translate(0px, ${(songPosition) => songPosition.songPosition}px);
// transition-property: transform,opacity,visibility,-webkit-transform;
// transition-timing-function: cubic-bezier(0,0,0,1.2);
// transition-duration: .3s;
background-color: #fff;
position: absolute;
top: 0;
left: 0;
right: 0;
height: 48px;
display: block;
`;

const ItemWrapperTwo = window.styled.div`
// if active
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

const Dragger = window.styled.div`
border: 0;
background-repeat: no-repeat;
background-position: 50%;
background-size: 24px 24px;
width: 24px;
height: 48px;
margin-left: -24px;
cursor: move;
flex-shrink: 0;
`;

const QueueCover = window.styled.div`
position: relative;
margin-right: 7px;
`;

const Cover = window.styled.img`
height: 32px;
width: 32px;
text-align: center;
position: relative;
background-repeat: no-repeat;
display: block;
background-size: cover;
background-position: 50% 50%;
`;

const RealCover = window.styled.div`
width: 32px;
height: 32px;
opacity: 1;
`;

const QueueDetails = window.styled.div`
opacity: .5;
overflow: hidden;
flex-grow: 1;
`;

const QueueArtistAndTitle = window.styled.div`
color: #999;
display: flex;
`;

const Artist = window.styled.div`
color: #999;
text-decoration: none;
flex: 0 1 auto;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: normal;
cursor: pointer;
`;

const BasedOn = window.styled.div`
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

const Title = window.styled.div`
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

const Duration = window.styled.div`
text-align: right;
line-height: 36px;
min-width: 52px;
color: #999;
font-weight: 100;
font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
display: block;
`;

const QueueListEntry = ({ song, index, queue }) => {

  const minutes = Math.floor(song.duration / 60) % 60;
  let seconds = Math.floor(song.duration) % 60;
  if (seconds.toString().length === 1) {
    seconds = `0${seconds}`;
  }

  let queueListLength = queue.length * 48;
  let songPosition = (48 * index) - queueListLength;
  console.log(songPosition);

  return (
    <ItemWrapper1 songPosition={songPosition}>
      <ItemWrapperTwo>
        {/* <Dragger><i className="fas fa-ellipsis-v fa-lg"></i></Dragger> */}
        <QueueCover>
          <Cover src={song.cover}></Cover>
        </QueueCover>
        <QueueDetails>
          <QueueArtistAndTitle>
            <Artist>{song.artist}</Artist>
            <BasedOn>&nbsp;- From your history</BasedOn>
          </QueueArtistAndTitle>
          <Title>{song.title}</Title>
        </QueueDetails>
        <Duration>{`${minutes}:${seconds}`}</Duration>
      </ItemWrapperTwo>
    </ItemWrapper1>
  );

};

export default QueueListEntry;