import React, { useState, useEffect } from 'react';
import "./JumpingColor.css"

const Box = ({ color }) => {
  const boxStyle = {
    backgroundColor: color,
  };

  return <div className="box" style={boxStyle}></div>;
};

function JumpingColors() {
  const [boxColors, setBoxColors] = useState(new Array(6).fill('white'));
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  const [isFilling, setIsFilling] = useState(false);

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple','red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    let interval;

    if (isFilling && currentBoxIndex < boxColors.length) {
      interval = setInterval(() => {
        setBoxColors((prevColors) => {
          const newColors = prevColors.map((color, index) =>
            index === currentBoxIndex ? getRandomColor() : 'white'
          );
          return newColors;
        });
         setCurrentBoxIndex((prevIndex) => prevIndex + 1);
      }, 1000); // 3 seconds interval
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isFilling, currentBoxIndex,boxColors.length]);

  return (
      <div className="container-fluid justify-contentCenter">
        <h1 className="title">Color Changing Boxes</h1>
        <div className="row d-flex">
          <button onClick={() => setIsFilling(true)} disabled={isFilling}>
            Start
          </button>
          <button onClick={() => setIsFilling(false)} disabled={!isFilling}>
            End
          </button>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {boxColors.map((color, index) => (
            <Box key={index} color={color} />
          ))}
        </div>
      </div>
  );
};

export default JumpingColors;