import React from 'react'

export default function NewUsers() {
  const handleAddNewPhone = (e) => {
    e.preventDefault();
    const phoneName = e.target.phoneName.value;
    const phonePrice = e.target.phonePrice.value;
    const newPhone = { phoneName, phonePrice };
    console.log(newPhone);

    fetch("http://localhost:3000/phones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhone)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Data after Post:", data);
      })
      .catch(err => console.log(err));

    
  }
    return (
      <div className='grid place-items-center'>
        <div>
          <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-5" onSubmit={handleAddNewPhone}>
            <legend className="fieldset-legend">Add your Favorite Phone</legend>

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Phone Name" name='phoneName' />

            <label className="label">Price</label>
            <input type="number" className="input" placeholder="Phone Price" name='phonePrice' />

            <button className="btn btn-neutral mt-4" type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }

