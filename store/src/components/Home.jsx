import React, { useContext } from 'react'
import { Fakeallproducts } from '../context/Fakeproducts'

const Home = () => {

    const data = useContext(Fakeallproducts)
    console.log(data);
    

  return (
    <div>
        {/* {data.map(function(elem,idx){
            return <a href="">
                
            </a>
        })} */}
    </div>
  )
}

export default Home