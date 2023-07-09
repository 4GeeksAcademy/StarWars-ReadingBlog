import React from "react";
import { Card } from "./components/card";
import "../../../styles/index.css";

import lukeSkywalkerImage from "../img/People/luke-skywalker.png";
import c3poImage from "../img/People/c-3po.png";
import r2d2Image from "../img/People/r2-d2.png";
import darthVaderImage from "../img/People/darth-vader.png";
import leiaOrganaImage from "../img/People/leia-organa.png";
import owenImage from "../img/People/owen.png";
import beruImage from "../img/People/beru.png";
import r5d4Image from "../img/People/r5-d4.png";
import biggsDarklighterImage from "../img/People/biggs-darklighter.png";
import obiWanKenobiImage from "../img/People/obi-wan-kenobi.png";

import tatooineImage from "../img/Planets/tatooine.png";
import alderaanImage from "../img/Planets/alderaan.png";
import yavinIvImage from "../img/Planets/yaviniv.png";
import hothImage from "../img/Planets/hoth.png";
import dagobahImage from "../img/Planets/dagobah.png";
import bespinImage from "../img/Planets/bespin.png";
import endorImage from "../img/Planets/endor.png";
import nabooImage from "../img/Planets/naboo.png";
import coruscantImage from "../img/Planets/coruscant.png";
import kaminoImage from "../img/Planets/kamino.png";

import sandCrawlerImage from "../img/Starships/sandcrawler.png";
import skyhopperImage from "../img/Starships/skyhopper.png";
import landspeederImage from "../img/Starships/landspeeder.png";
import tieFighterImage from "../img/Starships/tiefighter.png";
import snowspeederImage from "../img/Starships/snowspeeder.png";
import tieBomberImage from "../img/Starships/tiebomber.png";
import atatImage from "../img/Starships/atat.png";
import atstImage from "../img/Starships/atst.png";
import cloudCarImage from "../img/Starships/cloudcar.png";
import sailBargeImage from "../img/Starships/sailbarge.png";

const App = () => {
  const people = [
    { name: "Luke Skywalker", imageUrl: lukeSkywalkerImage },
    { name: "C-3PO", imageUrl: c3poImage },
    { name: "R2-D2", imageUrl: r2d2Image },
    { name: "Darth Vader", imageUrl: darthVaderImage },
    { name: "Leia Organa", imageUrl: leiaOrganaImage },
    { name: "Owen Lars", imageUrl: owenImage },
    { name: "Beru Whitesun Lars", imageUrl: beruImage },
    { name: "R5-D4", imageUrl: r5d4Image },
    { name: "Biggs Darklighter", imageUrl: biggsDarklighterImage },
    { name: "Obi-Wan Kenobi", imageUrl: obiWanKenobiImage },
  ];

  const planets = [
    { name: "Tatooine", imageUrl: tatooineImage },
    { name: "Alderaan", imageUrl: alderaanImage },
    { name: "Yavin IV", imageUrl: yavinIvImage },
    { name: "Hoth", imageUrl: hothImage },
    { name: "Dagobah", imageUrl: dagobahImage },
    { name: "Bespin", imageUrl: bespinImage },
    { name: "Endor", imageUrl: endorImage },
    { name: "Naboo", imageUrl: nabooImage },
    { name: "Coruscant", imageUrl: coruscantImage },
    { name: "Kamino", imageUrl: kaminoImage },
  ];

  const starships = [
    { name: "Sandcrawler", imageUrl: sandCrawlerImage },
    { name: "Skyhopper", imageUrl: skyhopperImage },
    { name: "Landspeeder", imageUrl: landspeederImage },
    { name: "TIE Fighter", imageUrl: tieFighterImage },
    { name: "Snowspeeder", imageUrl: snowspeederImage },
    { name: "TIE Bomber", imageUrl: tieBomberImage },
    { name: "AT-AT", imageUrl: atatImage },
    { name: "AT-ST", imageUrl: atstImage },
    { name: "Cloud Car", imageUrl:cloudCarImage },
    { name: "Sail Barge", imageUrl: sailBargeImage },
  ];

  const renderCards = (items) => {
    return items.map((item, index) => (
      <Card key={index} name={item.name} imageUrl={item.imageUrl} />
    ));
  };

  return (
    <div>
      <h1>Star Wars Cards</h1>
      <div className="container">
        <div className="row">
          {renderCards(people)}
        </div>
        <div className="row">
          {renderCards(starships)}
        </div>
        <div className="row">
          {renderCards(planets)}
        </div>
      </div>
    </div>
  );
};

export default App;
