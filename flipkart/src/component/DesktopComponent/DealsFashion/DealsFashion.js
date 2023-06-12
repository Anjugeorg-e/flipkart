import React, { useEffect, useState } from 'react'
import './DealsFashion.css'

function DealsFashion() {
const [data, setData] =useState([]);

const fetchData = () => {
    fetch(
        "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
    .then((response) => {
        return response.json();
    })
    .then((item) => {
        setData(item.dealsOnFashion);
    });
};
useEffect(() => {
    fetchData();
}, []);

  return (
    <div className='dealsFashionContainer'>
        {data.map((card, index) => (
            <div className='dealFashionSubContainer' key ={index}>
                <img src={card.image} />
                <div className='fashionDescription'>
                    <span className='fashionName'>{card.title}</span>
                    <span className='fashionOffers'>{card.price}</span>
                    <span className='fashionDetails'>{card.description}</span>
                </div>   
            </div>    
        ))}
    </div>
  )
}

export default DealsFashion