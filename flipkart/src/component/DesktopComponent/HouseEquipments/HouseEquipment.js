import React, { useEffect, useState } from 'react'
import './HouseEquipment.css';

function HouseEquipment() {
const [data, setData] = useState([]);

const fetchData = () => {
    fetch(
        "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
    .then((response) => {
        return response.json();
    })
    .then((item) => {
        setData(item.electronics);
    })
}

useEffect(() => {
    fetchData();
},[]);

  return ( 

    <div className='ElectronicsContainer'>
        {data.map((card, index) => (
            <div className='electronicsSection'>
                <img src={card} />
            </div>    
        ))}
    </div>
  )
}

export default HouseEquipment