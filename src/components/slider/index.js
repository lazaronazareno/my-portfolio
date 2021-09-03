import React, { useState } from 'react';
import './styles.scss'


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
              top
            </div>
            <div className="divChild color3" style={{ transform: `translate(${x}%,${y}%)` }}>
              top right
            </div>
        </div>
        <div className="divFather">
            <div className="divChild color4" style={{ transform: `translate(${x}%,${y}%)` }}>
              left
            </div>
             <div className="divChild color5" style={{ transform: `translate(${x}%,${y}%)` }}>
              center
            </div>
            <div className="divChild color6" style={{ transform: `translate(${x}%,${y}%)` }}>
              right
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
      <button type="button" className="goLeft" onClick={goLeft}>left</button>
      <button type="button" className="goRight"  onClick={goRight}>right</button>
      <button type="button" className="goUp" onClick={goUp}>up</button>
      <button type="button" className="goDown" onClick={goDown}>down</button>
      </div>
    </div>
  );
}

export default Slider;