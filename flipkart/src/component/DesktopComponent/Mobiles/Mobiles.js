import React, { useEffect, useState } from 'react'
import './Mobiles.css'

function Mobiles() {
    const [data, setData] = useState([]);

    const  fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then((item) => {
            setData(item.mobiles);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='desktopMobilesSection'>
        {data.map((card, index) => (
            <div className='mobileSubSection' key ={index}>
                <img src={card} />
            </div>     
        ))}
    </div>
  )
}

export default Mobiles