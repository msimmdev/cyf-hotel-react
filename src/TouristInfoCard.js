import React from "react";

const TouristInfoCard = (props) => (
  <div className="card">
    <img src={props.src} className="card-img-top" />
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.children}</p>
      <a href={props.href} className="btn btn-primary">
        More Information
      </a>
    </div>
  </div>
);

export default TouristInfoCard;
