import React from 'react'
import "./Heading.css";
function Heading() {
  return (
    <div className='heading'>
        <p className="p-name">Name</p>
        <p className="p-symbol">Symbol</p>
        <p className="p-price">Price</p>
        <p className="p-volume">volume(24h)</p>
        <p className="p-percent">1h %</p>
        <p className="p-marketcap">Market Cap</p>
    </div>
  )
}

export default Heading