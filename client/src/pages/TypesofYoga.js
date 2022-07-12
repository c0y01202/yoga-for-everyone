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
      <div className="flex-row">
        <div className="col-sm-12 col-md-5">
          <img
            src={aerial}
            alt="Aerial Yoga"
            height={200}
            width={300}
          />
        </div>
        <div className="col-sm-12 col-md-7">
          <h3>Aerial Yoga</h3>
          <p>
            Aerial yoga is a type of yoga which uses a hammock or yoga swing to allow students to perform postures that they may not ordinarily 
            be able to attempt on the yoga mat. It is often also referred to as AntiGravity® yoga. It combines traditional yoga with moves inspired 
            by pilates, dance and acrobatics.
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div className="col-sm-12 col-md-5">
          <img
            src={ashtanga}
            alt="Ashtanga Yoga"
            height={200}
            width={300}
          />
        </div>
        <div className="col-sm-12 col-md-7">
          <h3>Ashtanga Yoga</h3>
          <p>
            Ashtanga yoga is a dynamic, flowing style that connects the movement of the body with the breath. The method stresses the importance of daily 
            practice of a set series of movements. There are six series of Ashtanga yoga sequences, which the student progresses through at their own pace.
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div className="col-sm-12 col-md-5">
          <img
            src={hatha}
            alt="Hatha Yoga"
            height={200}
            width={300}
          />
        </div>
        <div className="col-sm-12 col-md-7">
          <h3>Hatha Yoga</h3>
          <p>
          Probably the most famous and is used in the Occident.
          Hatha's aim is to help the practitioner reach a balance between body,
          mind and spirit through a series of physical exercises (asana), breathing exercises (Pranyama) and meditation. 
          It is a yogic discipline, part of the stream of tantric yoga, which also includes Kundalini yoga, Raja yoga, Laya yoga and Mantra yoga.
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div className="col-sm-12 col-md-5">
          <img
            src={kundalini}
            alt="Kundalini Yoga"
            height={200}
            width={300}
          />
        </div>
        <div className="col-sm-12 col-md-7">
          <h3>Kundalini Yoga</h3>
          <p>
            Kundalini is a Sanskrit term that literally means "coiled one."
            In spiritual circles, this term represents the primal force that lies "coiled" at the base of one's spine.
            Yoga poses, controlled breathing and meditation provide a means to awaken the kundalini and channel its enlightening force upward through the seven chakras,
            to the sahasrara chakra at the crown of the head.
          </p>
        </div>
      </div>
      <div className="flex-row">
        <div className="col-sm-12 col-md-5">
          <img
            src={yin}
            alt="Yin Yoga"
            height={200}
            width={300}
          />
        </div>
        <div className="col-sm-12 col-md-7">
          <h3>Yin Yoga</h3>
          <p>
            Yin Yoga is a slower-paced, more meditative version of the popular physical and spiritual discipline of yoga. In Yin yoga, the poses are held for a long period of time 
            (typically three to five minutes or longer) to target the connective tissues (such as the ligaments) rather than focusing on the muscles. As a result, the asanas are more 
            passive holds, with little muscular engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypesofYoga;
