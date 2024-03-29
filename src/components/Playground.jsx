import React, { useState } from "react";
import Saurabh from "../asssets/Bedroom2.png";
import Siddharth from "../asssets/bedroom2H1.png";
import Hotspot from "../asssets/icon.png";

export const Playground = () => {
  const [bgImage, setBgImage] = useState(Saurabh);
  const [showHotspot, setShowHotspot] = useState(true);

  const handleClick = () => {
    setBgImage(Siddharth);
    setShowHotspot(false);
  };

  return (
    <div className="w-full h-screen bg-black">
      <a-scene>
        <a-entity vr-mode-ui="enabled: true" cursor="rayOrigin: mouse;">
          <a-sky id="360-image" src={bgImage} animation="easing: easeInOutSine">
          {showHotspot && (
            <a-image
              src={Hotspot}
              scale="1 1 1"
              position="5 -2 -4"
              rotation="90 120 0"
              onClick={handleClick}
            ></a-image>
            )}
          </a-sky>
        </a-entity>
      </a-scene>
    </div>
  );
};
