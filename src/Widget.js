import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Tesla releases Semi-Truck!", "Cars & auto - 2476 readers")}
      {newsArticle("Bitcoin hits new highs! 64k", "Crypto - 1457 readers")}
      {newsArticle(
        "Jeff Bezos Space flight... How the billionaire fulfilled his dream",
        "Crypto - 3389 readers"
      )}
    </div>
  );
}

export default Widget;
