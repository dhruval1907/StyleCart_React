import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Fakeallproducts = createContext();
const Fakeproducts = (props) => {
  const [allproduct, setallproduct] = useState([]);

  // const getData = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   setallproduct(response.data);
  // };

  const sneakerProducts = [
    {
      id: 1,
      title: "Nike Air Force 1 White",
      price: 110,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      description:
        "Classic Nike Air Force 1 sneaker with premium leather and all-day comfort.",
    },
    {
      id: 2,
      title: "Air Jordan 1 High Retro",
      price: 180,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      description:
        "Iconic Air Jordan 1 High featuring timeless basketball heritage and street style.",
    },
    {
      id: 3,
      title: "Nike Dunk Low Panda",
      price: 120,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      description:
        "Low-top Nike Dunk sneaker with black and white leather design.",
    },
    {
      id: 4,
      title: "Adidas Yeezy Boost 350",
      price: 220,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      description: "Adidas Yeezy sneaker with Boost cushioning and knit upper.",
    },
    {
      id: 5,
      title: "Adidas Ultraboost Black",
      price: 190,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1589188056053-28910dc8d5d1",
      description:
        "Performance sneaker with responsive Boost midsole and breathable design.",
    },
    {
      id: 6,
      title: "Puma RS-X Reinvention",
      price: 115,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
      description: "Bold Puma RS-X sneaker built for modern street fashion.",
    },
    {
      id: 7,
      title: "New Balance 550",
      price: 135,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9",
      description:
        "Retro basketball-inspired New Balance sneaker with premium leather.",
    },
    {
      id: 8,
      title: "Converse Chuck 70",
      price: 95,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      description:
        "Classic Converse sneaker upgraded with better cushioning and durability.",
    },
    {
      id: 9,
      title: "Vans Old Skool",
      price: 75,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1528701800489-20be1c2ea4d8",
      description:
        "Skate-style Vans sneaker with suede and canvas construction.",
    },
    {
      id: 10,
      title: "Reebok Club C 85",
      price: 85,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      description:
        "Minimal Reebok sneaker inspired by classic tennis footwear.",
    },
    {
      id: 11,
      title: "Nike Blazer Mid",
      price: 105,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
      description:
        "Mid-top Nike Blazer sneaker with vintage basketball design.",
    },
    {
      id: 12,
      title: "Adidas Forum Low",
      price: 100,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
      description:
        "Adidas Forum Low sneaker blending retro style with modern comfort.",
    },
    {
      id: 13,
      title: "Nike Air Max 90",
      price: 140,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      description:
        "Nike Air Max sneaker with visible air cushioning and durable build.",
    },
    {
      id: 14,
      title: "New Balance 574",
      price: 110,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      description:
        "Everyday New Balance sneaker with classic running-inspired design.",
    },
    {
      id: 15,
      title: "Puma Suede Classic",
      price: 90,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      description:
        "Iconic Puma suede sneaker known for clean and timeless style.",
    },
    {
      id: 16,
      title: "Nike Air Max 97",
      price: 170,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      description: "Nike Air Max 97 sneaker featuring full-length air unit.",
    },
    {
      id: 17,
      title: "Adidas NMD R1",
      price: 150,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
      description:
        "Urban Adidas NMD sneaker with sock-like fit and Boost comfort.",
    },
    {
      id: 18,
      title: "Nike React Infinity Run",
      price: 160,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      description:
        "Nike React sneaker engineered for smooth cushioning and stability.",
    },
    {
      id: 19,
      title: "Asics Gel Lyte III",
      price: 130,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      description: "Asics sneaker with split tongue design and Gel cushioning.",
    },
    {
      id: 20,
      title: "Nike Cortez Classic",
      price: 80,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      description: "Classic Nike Cortez sneaker with retro running roots.",
    },
    {
      id: 21,
      title: "Adidas Superstar",
      price: 90,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5",
      description: "Adidas Superstar sneaker with iconic shell toe design.",
    },
    {
      id: 22,
      title: "Fila Disruptor II",
      price: 85,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1584735175097-719d848f844f",
      description: "Chunky Fila sneaker with bold streetwear aesthetics.",
    },
    {
      id: 23,
      title: "Nike Pegasus Trail",
      price: 130,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1600185367111-3c2e4b2e2c5e",
      description: "Nike Pegasus Trail sneaker built for comfort and grip.",
    },
    {
      id: 24,
      title: "Adidas Stan Smith",
      price: 95,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1562183241-b937e95585b6",
      description:
        "Minimal Adidas Stan Smith sneaker with clean leather design.",
    },
    {
      id: 25,
      title: "Nike Zoom Vomero",
      price: 155,
      category: "sneakers",
      image: "https://images.unsplash.com/photo-1606813907341-6fc9d1cfa9f1",
      description:
        "Nike Zoom Vomero sneaker offering responsive cushioning and support.",
    },
  ];

  useEffect(function () {
    setallproduct(sneakerProducts)
  }, []);

  return (
    <div>
      <Fakeallproducts.Provider value={allproduct}>
        {props.children}
      </Fakeallproducts.Provider>
    </div>
  );
};

export default Fakeproducts;
