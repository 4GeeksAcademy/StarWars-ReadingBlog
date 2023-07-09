import React from "react";
import PropTypes from "prop-types";
import starWars800x600 from "../../img/star-wars-800x600.jpg";

import lukeSkywalkerImage from "../../img/People/luke-skywalker.png";
import c3poImage from "../../img/People/c-3po.png";
import r2d2Image from "../../img/People/r2-d2.png";
import darthVaderImage from "../../img/People/darth-vader.png";
import leiaOrganaImage from "../../img/People/leia-organa.png";
import owenImage from "../../img/People/owen.png";
import beruImage from "../../img/People/beru.png";
import r5d4Image from "../../img/People/r5-d4.png";
import biggsDarklighterImage from "../../img/People/biggs-darklighter.png";
import obiWanKenobiImage from "../../img/People/obi-wan-kenobi.png";

import tatooineImage from "../../img/Planets/tatooine.png";
import alderaanImage from "../../img/Planets/alderaan.png";
import yavinIvImage from "../../img/Planets/yaviniv.png";
import hothImage from "../../img/Planets/hoth.png";
import dagobahImage from "../../img/Planets/dagobah.png";
import bespinImage from "../../img/Planets/bespin.png";
import endorImage from "../../img/Planets/endor.png";
import nabooImage from "../../img/Planets/naboo.png";
import coruscantImage from "../../img/Planets/coruscant.png";
import kaminoImage from "../../img/Planets/kamino.png";

import sandCrawlerImage from "../../img/Starships/sandcrawler.png";
import skyhopperImage from "../../img/Starships/skyhopper.png";
import landspeederImage from "../../img/Starships/landspeeder.png";
import tieFighterImage from "../../img/Starships/tiefighter.png";
import snowspeederImage from "../../img/Starships/snowspeeder.png";
import tieBomberImage from "../../img/Starships/tiebomber.png";
import atatImage from "../../img/Starships/atat.png";
import atstImage from "../../img/Starships/atst.png";
import cloudCarImage from "../../img/Starships/cloudcar.png";
import sailBargeImage from "../../img/Starships/sailbarge.png";

export const ItemDetails = (props) => {
  ItemDetails.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    details: PropTypes.array,
  };

  const { title, description, details } = props;

  const detailsHtml = details.map((detail, index) => {
    return (
      <div key={index} className="col-2">
        <p>{detail.label}</p>
        <p>{detail.value}</p>
      </div>
    );
  });

  let imageSource = starWars800x600;

  switch (title) {
    case "Luke Skywalker":
      imageSource = lukeSkywalkerImage;
      break;
    case "C-3PO":
      imageSource = c3poImage;
      break;
    case "R2-D2":
      imageSource = r2d2Image;
      break;
    case "Darth Vader":
      imageSource = darthVaderImage;
      break;
    case "Leia Organa":
      imageSource = leiaOrganaImage;
      break;
    case "Owen Lars":
      imageSource = owenImage;
      break;
    case "Beru Whitesun lars":
      imageSource = beruImage;
      break;
    case "R5-D4":
      imageSource = r5d4Image;
      break;
    case "Biggs Darklighter":
      imageSource = biggsDarklighterImage;
      break;
    case "Obi-Wan Kenobi":
      imageSource = obiWanKenobiImage;
      break;
    case "Tatooine":
      imageSource = tatooineImage;
      break;
    case "Alderaan":
      imageSource = alderaanImage;
      break;
    case "Yavin IV":
      imageSource = yavinIvImage;
      break;
    case "Hoth":
      imageSource = hothImage;
      break;
    case "Dagobah":
      imageSource = dagobahImage;
      break;
    case "Bespin":
      imageSource = bespinImage;
      break;
    case "Endor":
      imageSource = endorImage;
      break;
    case "Naboo":
      imageSource = nabooImage;
      break;
    case "Coruscant":
      imageSource = coruscantImage;
      break;
    case "Kamino":
      imageSource = kaminoImage;
      break;
    case "Sand Crawler":
      imageSource = sandCrawlerImage;
      break;
    case "Skyhopper":
      imageSource = skyhopperImage;
      break;
    case "Landspeeder":
      imageSource = landspeederImage;
      break;
    case "TIE Fighter":
      imageSource = tieFighterImage;
      break;
    case "Snowspeeder":
      imageSource = snowspeederImage;
      break;
    case "TIE Bomber":
      imageSource = tieBomberImage;
      break;
    case "AT-AT":
      imageSource = atatImage;
      break;
    case "AT-ST":
      imageSource = atstImage;
      break;
    case "Cloud Car":
      imageSource = cloudCarImage;
      break;
    case "Sail Barge":
      imageSource = sailBargeImage;
      break;
    default:
      break;
  }

  return (
    <div className="container">
      <div className="d-flex flex-row text-center">
        <img src={imageSource} className="col-6" alt="star wars image" />
        <div className="col-6">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <hr className="bg-danger border border-danger" />

      <div className="d-flex flex-row text-center text-danger">{detailsHtml}</div>
    </div>
  );
};
