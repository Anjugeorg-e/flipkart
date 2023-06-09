import React, { useEffect, useState } from 'react'
import './Deals.css';

function Deals() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) =>{
            return response.json();
        })
        .then((item) => {
            setData(item.newDeals);
        })
    
    }

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <div className='dealsContainer'>
        {data.map((card, index) => (
            <span className='dealsCards' key={index}>
                <img src={card.image} />
            </span>
        ))}
    </div>
  )
}

export default Deals