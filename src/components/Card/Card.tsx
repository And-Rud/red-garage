import React, { FC } from "react";
import { CardProps } from "./types";
import "./Card.css";

const Card: FC<CardProps> = ({ title, description, className, imageUrl, children, onClick }) => {
  return (
    <div
      className={`card ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      {children && <div className="card__content">{children}</div>}
    </div>
  );
};

export default Card;
