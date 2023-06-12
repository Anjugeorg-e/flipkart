import React, { useEffect, useState } from 'react'
import './TopOffer.css'

function TopOffer() {
const [data, setData] = useState([]);
const fetchData = () => {
    fetch( 
        "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
    .then((response) => {
        return response.json()
    })
    .then((item) => {
        setData(item.desktopOffers)
    })
}

useEffect(() => {
    fetchData();
}, []);

  return (

    <div className='offersContainer'>
        {data.map((card, index) => (
            <div className='offerCards' key={index}>
                <img src={card.image}/>
                <div className='offerSubContainer'>
                    <span className='offerTitle'>{card.title}</span>
                    <span className='offerRange'>{card.offers}</span>
                    <span className='offerDescription'>{card.description}</span>
                </div>    
            </div>    
        ))}
    </div>
  )
}

export default TopOffer