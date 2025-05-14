import React, { use, useEffect, useState } from 'react'
import { usePhoneContext } from '../context/ContextPhone';

export default function Phones() {
  const { phones } = usePhoneContext();
  console.log(phones);
  const [smartPhones, setPhones] = useState([]);
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesResponse = await fetch("http://localhost:3000/phones");
        const phonesData = await phonesResponse.json();
        setPhones(phonesData)
      } catch (err) {
        console.log(err);
      }
    }

    fetchPhones();
  }, [])


  return (
    <div className='grid place-items-center'>
        <h1 className='text-2xl font-semibold text-purple-500 my-2 '>Smart Phones:</h1>
        <div className="flex justify-center">
          {smartPhones.map((phone) => (
            <div key={phone.id} className="border-2 border-yellow-300 rounded-lg w-fit p-4 m-2 text-green-300">
              {/* <img src={phone.imageUrl} alt={phone.name} /> */}
              <h2>Phone Name: {phone.model}</h2>
              <p>Price: {phone.price}</p>
              <p>Ram: {phone.specs.ram}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

