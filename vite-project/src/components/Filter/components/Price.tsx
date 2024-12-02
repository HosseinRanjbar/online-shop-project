import React from 'react'
import '../assets/price.css'

const Price = () => {
    return (
        <div>
            Price
            <div className='range-container'>
                <input
                    type="range"
                    name="min-range"
                    className="range"
                />
                <input
                    type="range"
                    name="max-range"
                    className="range"
                />
            </div>
        </div>
    )
}

export default Price