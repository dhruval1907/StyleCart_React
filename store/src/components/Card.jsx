import React from "react";

const Card = (props) => {
    
  return (
    <div className="rounded-2xl flex flex-col gap-5 items-center h-[420px] w-[320px] bg-blue-100 p-5">
      
      <div className="w-full h-[250px] flex items-center justify-center">
        <img
          className="h-full object-cover"
          src={props.image}
        />
      </div>

      <p className="text-lg text-center font-medium line-clamp-2">
        {props.name}  
      </p>

      <div className="flex w-full justify-around text-lg font-semibold">
        <h5>Jewellary</h5>
        <h5> $ {props.price}</h5>
      </div>

    </div>
  );
};

export default Card;
