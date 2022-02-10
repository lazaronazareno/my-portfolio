import React, { useState } from 'react';
import DiaryLeft from '../../pages/diaryLeft';
import PixelCenter from '../../pages/pixelCenter';
import './styles.scss'
import arrow from '../../static/images/arrow.png'
import MusicRight from '../../pages/musicRight';
import JapanUp from '../../pages/japanUp';
import { Link } from 'react-router-dom';

function Slider() {
  const [x, setX] = useState(-100);
  const [y, setY] = useState(-100);
  const goLeft = () => {
    x === 0 ? setX(-100 * (2 - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (2 - 1) ? setX(0) : setX(x - 100);
  };
  const goUp = () => {
    y === 0 ? setY(-100 * (2 - 1)) : setY(y + 100);
  };
  const goDown = () => {
    y === -100 * (2 - 1) ? setY(0) : setY(y - 100);
  };
  return (
    <div>
      <div className="father">
        <div className="divFather">
             <div className="divChild color2" style={{ transform: `translate(${x}%,${y}%)` }}>
              <JapanUp />
            </div>
            <div className="divChild color6" style={{ transform: `translate(${x}%,${y}%)` }}>
              <MusicRight />
            </div>
        </div>
        <div className="divFather">
            <div className="divChild" style={{ transform: `translate(${x}%,${y}%)` }}>
              <DiaryLeft/>
            </div>
             <div className="divChild color5" style={{ transform: `translate(${x}%,${y}%)` }}>
               <PixelCenter />
            </div>
        </div>
      <div className={`goLeft position${x}${y}`} onClick={goLeft}><img className="arrowLeft" src={arrow} alt="Kiranshastry arrow"/></div>
      <div className={`goRight position${x}${y}`}  onClick={goRight}><img className="arrow" src={arrow} alt="Kiranshastry arrow"/></div>
      <div className={`goUp position${x}${y}`} onClick={goUp}><img className="arrowUp" src={arrow} alt="Kiranshastry arrow"/></div>
      <div className={`goDown position${x}${y}`} onClick={goDown}><img className="arrowDown" src={arrow} alt="Kiranshastry arrow"/></div>
      <Link to="/" className={`back d-flex justify-content-center align-items-center position${x}${y}`}>Volver</Link>
      </div>
    </div>
  );
}

export default Slider;