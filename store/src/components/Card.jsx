import React from "react";

const Card = () => {
  return (
    <div className="rounded-2xl flex justify-evenly flex-col gap-5 items-center   h-[30%] w-[20%] bg-blue-100 ">
      <div className="w-full h-[50%] flex items-center justify-center">
        <img
          className="h-[100%] w-[50%]"
          src="https://images.unsplash.com/photo-1762656669479-496d6291ef64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <p className="w-[80%] font-normal text-xl">
        "From our Legends Collection, the Naga was inspired by the mythical
        water dragon that "
      </p>
      <div className="flex w-[80%] justify-between text-xl font-semibold">
        <h5>jewelery</h5>
        <h5>$ 695</h5>
      </div>
    </div>
  );
};

export default Card;
