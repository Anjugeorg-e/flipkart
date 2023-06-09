import React, { useEffect, useState } from 'react'
import './Categories.css';

function Categories() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) =>{
            return response.json();
        })
        .then((item) => {
            setData(item.headerNav);
        })
    
    }
    useEffect(()=>{
        fetchData();
    });

  return (
    <div className='cateoriesContainer'>
        {data.map((card, index) => (
            <span className='categoriesCards' key={index}>
                <img src={card.image} />
            </span>
        ))}
    </div>
  )
}

export default Categories