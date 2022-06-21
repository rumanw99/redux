import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-white border-0">
                <img src="/assets/bg.png" className="card-img" alt="Backgrund" height="300px" />
            </div>
            <Products />
        </div>
    )
}

export default Home