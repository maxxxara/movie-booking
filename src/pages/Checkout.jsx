import React, { useContext, useEffect, useState } from 'react'
import BookingContext from './../context/BookingContext';
import { makeRequest } from './../axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate(); 
  const fee = 3;
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const {selected, selectedMovie} = useContext(BookingContext);
  const mutation = useMutation({
    mutationFn: buyTickets => {
      return makeRequest.post('/seats/new/' + selectedMovie.id, buyTickets)
    }
  })

  const submitHandle = () => {
    if(name.length == 0 || surname.length == 0) {
      setError('სახელის და გვარის შეყვანა აუცილებელია')
    } else {
      mutation.mutate({ selected: selected })
      const values = {c_id: selectedMovie.id, name: name, surname: surname, payed: selected.length * selectedMovie.price + fee, selected: selected.toString()}
      let a = makeRequest.post('/seats/buy', values)  
      a.then(res => navigate("/qr/" + res.data))
      // makeRequest.get('')
    }
    
  }
  
  return (
    <div className='checkout container px-52 lg:px-12'>
      {selected.length == 0 ? <h4>არ აგირჩევიათ ბილეთები</h4> : (
      <div className='flex flex-col gap-y-4'>
        <div className='flex gap-4 items-center'>
          <h4 className='font-poppins font-medium text-xl'>{selectedMovie.title}</h4>
          <p className='font-poppins'>{selectedMovie.start_time.slice(5, 11)} {selectedMovie.start_time.slice(17, 22)}</p>
        </div>
        <p>ადგილები: {selected.map(item => <span className='font-poppins ml-2'>{item}</span>)}</p>
        {error ? error : null}
        <div className='flex gap-10 gapy-10'>
          <div className='w-full'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='სახელი' className='font-bold w-full border border-gray6 px-4 py-3'/>
          </div>
          <div className='w-full'>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='სახელი' className='font-bold w-full border border-gray6 px-4 py-3'/>
          </div>
        </div>
        <div className='w-full'>
          <input type="text" placeholder='საცხოვრებელი მისამართი' className='font-bold w-full border border-gray6 px-4 py-3'/>
        </div>
        <div className='flex gap-10 gapy-10'>
          <div className='w-full'>
            <input type="text" placeholder='ემაილი' className='font-bold w-full border border-gray6 px-4 py-3'/>
          </div>
          <div className='w-full'>
            <input type="text" placeholder='ტელეფონის ნომერი' className='font-bold w-full border border-gray6 px-4 py-3'/>
          </div>
        </div>
        <div className='w-full'>
          <input type="text" placeholder='ბარათის ნომერი' className='font-bold w-full border border-gray6 px-4 py-3'/>
        </div>
        <div className='flex gap-10 gapy-10'>
          <div className='w-full'>
            <input type="text" placeholder='POSTAL CODE' className='font-bold font-poppins w-full border border-gray6 px-4 py-3'/>
          </div>
          <div className='w-full'>
            <input type="text" placeholder='CVC' className='font-bold font-poppins w-full border border-gray6 px-4 py-3'/>
          </div>
        </div>
        <button onClick={submitHandle}>დადასტურება</button>
      </div>
      )}
    </div>
  )
}

export default Checkout