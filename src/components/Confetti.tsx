import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div>
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={5000}
      />
    </div>
  );
};

export default Confetti;
