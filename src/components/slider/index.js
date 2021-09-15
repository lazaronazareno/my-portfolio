import React, { useState } from 'react';
import DiaryLeft from '../../pages/diaryLeft';
import PixelCenter from '../../pages/pixelCenter';
import './styles.scss'
import arrow from '../../static/images/arrow.png'
import MusicRight from '../../pages/musicRight';
import JapanUp from '../../pages/japanUp';
import PastelTopRIght from '../../pages/pastelTopRight';


function Slider() {
  const [x, setX] = useState(-100);
  const [y, setY] = useState(-100);
  const goLeft = () => {
    x === 0 ? setX(-100 * (3 - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (3 - 1) ? setX(0) : setX(x - 100);
  };
  const goUp = () => {
    y === 0 ? setY(-100 * (3 - 1)) : setY(y + 100);
  };
  const goDown = () => {
    y === -100 * (3 - 1) ? setY(0) : setY(y - 100);
  };
  return (
    <div>
      <div className="father">
        <div className="divFather">
            <div className="divChild color1" style={{ transform: `translate(${x}%,${y}%)` }}>
              top left
            </div>
             <div className="divChild color2" style={{ transform: `translate(${x}%,${y}%)` }}>
              <JapanUp />
            </div>
            <div className="divChild color3" style={{ transform: `translate(${x}%,${y}%)` }}>
              <PastelTopRIght />
            </div>
        </div>
        <div className="divFather">
            <div className="divChild" style={{ transform: `translate(${x}%,${y}%)` }}>
              <DiaryLeft/>
            </div>
             <div className="divChild color5" style={{ transform: `translate(${x}%,${y}%)` }}>
               <PixelCenter />
            </div>
            <div className="divChild color6" style={{ transform: `translate(${x}%,${y}%)` }}>
              <MusicRight />
            </div>
        </div>
        <div className="divFather">
            <div className="divChild color7" style={{ transform: `translate(${x}%,${y}%)` }}>
              bottom left
            </div>
             <div className="divChild color8" style={{ transform: `translate(${x}%,${y}%)` }}>
              bottom
            </div>
            <div className="divChild color9" style={{ transform: `translate(${x}%,${y}%)` }}>
              bottom right
            </div>
        </div>
      <div className={`goLeft position${x}${y}`} onClick={goLeft}><img className="arrow" src={arrow} alt="Kiranshastry"/></div>
      <div className={`goRight position${x}${y}`}  onClick={goRight}><img className="arrow" src={arrow} alt="Kiranshastry"/></div>
      <div className={`goUp position${x}${y}`} onClick={goUp}><img className="arrow" src={arrow} alt="Kiranshastry"/></div>
      <div className={`goDown position${x}${y}`} onClick={goDown}><img className="arrow" src={arrow} alt="Kiranshastry"/></div>
      </div>
    </div>
  );
}

export default Slider;