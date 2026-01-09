import React, { useContext } from "react";
import { Fakeallproducts } from "../context/Fakeproducts";
import Card from "../components/Card";

const Home = () => {
  const data = useContext(Fakeallproducts);
  console.log(data);
  

  return (
    <div className="min-h-screen  justify-center w-full flex flex-wrap gap-10 p-10">
      {data.map(function(elem,idx){
       return <a key={idx} href="">
            <Card name={elem.title} image={elem.image} price={elem.price} desc={elem.title}/>
        </a>
      })}
    </div>
  );
};

export default Home;
