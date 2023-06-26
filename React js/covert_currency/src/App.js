import React, { useEffect, useState } from 'react';
import './App.css';
import Currencyvalue from './Currencyvalue'

const convert_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=51a261f6fcba097d5d5e90e70d8d3712";
// http://api.exchangeratesapi.io/v1/latest?access_key=51a261f6fcba097d5d5e90e70d8d3712

function App() {
  const [currencyname, setcurrencyname] = useState([])
  const [fromcurrency, setfromcurrency] = useState( )
  const [tocurrency, settocurrency] = useState( )
  const [exchangerate, setexchangerate] = useState( )
  const [amount, setamount] = useState(1)
  const [amountinfromcurrency, setamountinfromcurrency] = useState(true)

  let toamount, fromamount
  if (amountinfromcurrency) {
    fromamount = amount
    toamount = amount * exchangerate
  } else {
    toamount = amount
    fromamount = amount / exchangerate
  }



  useEffect(() => {
    fetch(convert_URL)
      .then(res => res.json())
      .then(data => {
        const firstcurrencyoption = Object.keys(data.rates)[0]
        setcurrencyname([data.base, ...Object.keys(data.rates)])
        setfromcurrency(data.base)
        console.log(data.base)
        settocurrency(firstcurrencyoption)
        setexchangerate(data.rates[firstcurrencyoption])
      })
  }, [])
  useEffect(() => {
    if(fromcurrency != null && tocurrency != null ){
      //fetch(`${convert_URL}&base=${fromcurrency}&symbols=${tocurrency}`)
      fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=51a261f6fcba097d5d5e90e70d8d3712&base=${fromcurrency}&symbols=${tocurrency}`)
      .then (res => res.json())
      .then (data => setexchangerate(data.rates[tocurrency]))
      //.then(data => setexchangerate(data.rates[fromcurrency]))
    }
  }, [fromcurrency, tocurrency])

  function handlefromamountchange(e) {
    setamount(e.target.value)
    setamountinfromcurrency(true) 
  }
  function handletoamountchange(e) {
    setamount(e.target.value)
    setamountinfromcurrency(false)
    
  }

  return (
    <>
      <h1>Convert Currency</h1>
      <Currencyvalue currencyname={currencyname} selectedcurrency={fromcurrency} onselectchange={e => setfromcurrency(e.target.value)} amount={fromamount} onchangeamount={handlefromamountchange} />
      <div className="equals">=</div>
      <Currencyvalue currencyname={currencyname} selectedcurrency={tocurrency} onselectchange={e => settocurrency(e.target.value)} amount={toamount} onchangeamount={handletoamountchange}/>

    </>
  );
}

export default App;