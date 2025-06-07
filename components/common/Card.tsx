import React from "react";

interface CardProps {
  icon?: string;
  title?: string;
  description?: string;
  firstInfo?: string;
  secondInfo?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card w-auto lg:w-96 bg-base-200 card-lg shadow-sm mb-4">
      <div className="card-body">
        <div className="flex flex-row gap-4">
          {props.icon && <i className={`${props.icon} text-2xl`}></i>}
          <h2 className="card-title font-bold text-xl">{props.title}</h2>
        </div>
        <p className="font-bold text-md">{props.description}</p>
        <p>{props.firstInfo}</p>
        <p>{props.secondInfo}</p>
      </div>
    </div>
  );
};

export default Card;
