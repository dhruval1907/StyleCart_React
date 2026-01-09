import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Fakeallproducts = createContext()
const Fakeproducts = (props) => {
    const [allproduct, setallproduct] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setallproduct(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return( 
        <div> 
            <Fakeallproducts.Provider value={allproduct}>
                {props.children}
            </Fakeallproducts.Provider>
        </div>);
};

export default Fakeproducts;
