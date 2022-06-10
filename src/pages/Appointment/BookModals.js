import React from 'react';
import { format } from 'date-fns';


const BookModals = ({ treatment,setTreatment,date }) => {
  const { name, slots } = treatment;

  const handleModal = event =>{
    event.preventDefault();
    const day = event.target.day.value;
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const data = {
      day:day,
      slot:slot,
      name:name,
      email:email,
      phone:phone

    },

    url = `http://localhost:5000/booking`
    fetch(url, {
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    

    setTreatment(null);
  }

  return (
    <div>
      <input type="checkbox" id="Booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="Booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">Book:{name}</h3>


          <form onSubmit={handleModal} className='grid grid-cols-1 gap-2'>
            <input name='day' type="text" disiabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
            <select name='slot' class="select select-bordered w-full max-w-xs">
             {slots.map(slot => <option>{slot}</option>)}
            </select>
            <input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input name='email' type="text" placeholder="E-mail" class="input input-bordered w-full max-w-xs" />
            <input name='phone' type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value='submit' class="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModals;