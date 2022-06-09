import React from 'react';
import { format } from 'date-fns';


const BookModals = ({ treatment,setTreatment,date }) => {
  const { name, slots } = treatment;

  const handleModal = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
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
            <input type="text" disiabled value={format(date,'pp')} class="input input-bordered w-full max-w-xs" />
            <select name='slot' class="select select-bordered w-full max-w-xs">
             {slots.map(slot => <option>{slot}</option>)}
            </select>
            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="E-mail" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value='submit' class="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModals;