import React from 'react';
import QueueListEntry from './QueueListEntry.jsx';

// song items + autoplay station bar

// queue items container
const Wrapper = window.styled.div`
transform: translateY(${(queueListLength) => queueListLength.queueListLength}px);
position: relative;
`;

// Autoplay station section

// queue item_wrapper queue_fallback
const ItemWrapper = window.styled.div`
transform: translate(0px, ${(autoplayPosition) => autoplayPosition.autoplayPosition}px);
// transition-property: transform,opacity,visibility,-webkit-transform;
// transition-duration: .3s;
height: 120px;
padding-top: 16px;
background-color: #fff;
position: absolute;
top: 0;
left: 0;
right: 0;
`;

//queueFallback
const Autoplay2 = window.styled.div`
height: 100%;
box-sizing: border-box;
`;

//queueFallback_stationMode
const Autoplay3 = window.styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 24px;
height: 100%;
border-top: 1px solid #e5e5e5;
`;

//queueFallback_text
const Autoplay4 = window.styled.div`
width: 330px;
`;

//heading
const Station = window.styled.div`
line-height: 32px;
font-size: 18px;
font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
font-weight: 100;
`;

//subheading
const Selection = window.styled.div`
line-height: 20px;
color: #999;
font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
font-weight: 100;
font-size: 14px;
`;

// toggle sc-toggle sc-toggle active
const Label = window.styled.label`
pointer-events: auto;
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
${
  autoplay => autoplay.autoplay &&
  `content:'';
  left: -2px;
  top: -2px;
  width: 50px;
  height: 29px;
  background: #f50;
  transition: opacity .2s;
  border-radius: 14px;`
}
`;

// sc toggle handle
const Toggler = window.styled.span`
left: -1px;
position: absolute;
z-index: 1;
top: -1px;
width: 27px;
height: 27px;
background: #fff;
display: block;
border-radius: 50%;
transition: all .2s;
${
  autoplay => autoplay.autoplay &&
  'left: 20px;'
}
`;

const QueueList = ({ currentSong, queue, autoplay, autoplayHandler }) => {

  let queueListLength = queue.length * 48;
  let autoplayPosition = 0;

  return (
    <Wrapper queueListLength={queueListLength}>

      {queue.map((song, index, queue) => <QueueListEntry key={index} song={song} index={index} queue={queue}/>)}

      <ItemWrapper autoplayPosition={autoplayPosition}>
        <Autoplay2>
          <Autoplay3>
            <Autoplay4>
              <Station>Autoplay Station</Station>
              <Selection>Hear related tracks based on what's playing now.</Selection>
            </Autoplay4>
            <div>
              <Label autoplay={autoplay} onClick={() => autoplayHandler()}>
                <Toggler autoplay={autoplay}>
                </Toggler>
              </Label>
            </div>
          </Autoplay3>
        </Autoplay2>
      </ItemWrapper>


    </Wrapper>

  );

};

export default QueueList;