import React from "react";

import aerial from "../components/react_images/TypesofYoga/aerial.png";
import ashtanga from "../components/react_images/TypesofYoga/ashtanga.png";
import hatha from "../components/react_images/TypesofYoga/hatha.png";
import kundalini from "../components/react_images/TypesofYoga/kundalini.png";
import yin from "../components/react_images/TypesofYoga/yin.png";

import "../App.css";

function TypesofYoga() {
  return (
    <div className="TypesofYoga">
      <div>
        <img
          src={aerial}
          alt="Aerial Yoga"
          height={200}
          width={300}
        />
      </div>
      <div>
        <img
          src={ashtanga}
          alt="Ashtanga Yoga"
          height={200}
          width={300}
        />
      </div>
      <div>
        <img
          src={hatha}
          alt="Hatha Yoga"
          height={200}
          width={300}
        />
      </div>
      <div>
        <img
          src={kundalini}
          alt="Kundalini Yoga"
          height={200}
          width={300}
        />
      </div>
      <div>
        <img
          src={yin}
          alt="Yin Yoga"
          height={200}
          width={300}
        />
      </div>
    </div>
  );
}

export default TypesofYoga;
