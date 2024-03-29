import React from "react";

const FruitCard = ({ fruit }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg group transform hover:scale-110 duration-100">
      <img
        src={require(`../assets/${fruit.image}.jpeg`)}
        alt={`${fruit.image}`}
        className="w-full h-52 object-cover"
      />
      <div className="flex flex-col items-center my-1 space-y-1">
        <span className="font-body text-slate-500 block">{fruit.name}</span>
        <span className="font-body text-slate-500">₹{fruit.price}</span>
        <span className="font-body uppercase text-lime-400 text-xs group-hover:visible invisible">
          Add To Cart
        </span>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">
        10% off
      </span>
    </div>
  );
};

export default FruitCard;
