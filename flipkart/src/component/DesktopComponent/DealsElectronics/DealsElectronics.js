import React, { useEffect, useState } from 'react'
import './DealsElectronics.css';

function DealsElectronics() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch( 
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) => {
            return response.json()
        })
        .then((item) => {
            setData(item.DealsOnElectronics)
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='dealsOnElectronics'>
        {data.map((card, index) =>(
            <div className='electronicsSubSection'>
                <img src={card.image} />
                <div className='electronicsDetails'>
                    <span className='electronicsName'>{card.title}</span>
                    <span className='electronicsPrice'>{card.price}</span>
                    <span className='electronicsDescription'>{card.description}</span>
                </div>    
            </div>    
        ))}
    </div>
  )
}

export default DealsElectronics