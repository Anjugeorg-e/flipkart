import React, { useEffect, useState } from 'react'
import './OfficeEquipment.css';

function OfficeEquipment() {
const [data, setData] = useState([]);

const fetchData =() => {
    fetch(
        "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
    .then((response) => {
        return response.json()
    })
    .then((item) => {
        setData(item.officeEquipments)
    });
};

useEffect(() => {
    fetchData();
},[]);

  return (

    <div className='officeEquipmentsContainer'>
        {data.map((card, index) => (
            <div className='equipmentsSubSection'>
                <img src={card} />
            </div>    
        ))}
    </div>
  )
}

export default OfficeEquipment