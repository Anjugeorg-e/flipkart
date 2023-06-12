import React, { useEffect, useState } from 'react'
import './Categories.css';

function DesktopCategories() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) =>{
            return response.json();
        })
        .then((item) => {
            setData(item.desktopCategories);
        })
    
    }
    useEffect(()=>{
        fetchData();
    });
  return (
    <div className='CategoriesMainContainer'>
        <div className='DesktopCateoriesContainer'>
            {data.map((card, index) => (
                <div className='DesktopCategoriesCards' key={index}>
                    <img src={card.image} />
                    <span>{card.title}</span>
                </div>    
            ))}
    </div>
    </div>
  )
}

export default DesktopCategories;

