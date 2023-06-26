import React from 'react'

export default function Currencyvalue(props) {
    const {
        currencyname, selectedcurrency,onselectchange,amount,onchangeamount
    } = props
    return (
        <div>
            <input type="number" className="inputvalue" value={amount} onChange={onchangeamount} />
            <select value={selectedcurrency} onChange={onselectchange}>
                {currencyname.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
