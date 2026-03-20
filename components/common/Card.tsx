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
    <div className="card w-100  bg-base-200 card-lg  mb-4 shadow-md shadow-gray-500/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="card-body">
        <div className="flex flex-row gap-4 mb-4">
          {props.icon && <i className={`${props.icon} text-xl`}></i>}
          <h2 className="card-title font-bold text-lg">{props.title}</h2>
        </div>
        <div>
          <p className="font-bold text-xl">{props.description}</p>
          <p className="text-sm">{props.firstInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
