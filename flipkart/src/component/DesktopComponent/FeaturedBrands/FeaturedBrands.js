import React, { useEffect, useState } from 'react'
import './FeaturedBrands.css'

function FeaturedBrands() {
    const [data, setData] = useState([]);

    const fetchData= () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            setData(item.featuredBrands);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='featuredBrands'>
        {data.map((card, index) => (
            <div className='brandsContainer' key={index}>
                <img src={card} />
            </div>    
        ))}
    </div>
  )
}

export default FeaturedBrands