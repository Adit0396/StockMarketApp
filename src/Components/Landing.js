import React from 'react';
import './Landing.css'
function Landing()
{
    return(
        <div>
        <div className="text">
        <h5>A stock or share (also known as a company's "equity") is a financial instrument that represents ownership in a company or corporation and represents a proportionate claim on its assets (what it owns) and earnings (what it generates in profits).
        </h5>
        </div>
        <p> There are lot of sectors that are present in the market but this stock page is only going to cover a few of them
            <div className='list'>
        <ul>
            <li>Materials</li>
            <li>Health Care</li>
            <li>Information Technology</li>
            <li>Industrials</li>
            <li>Financials</li>
            <li>Utilities</li>
        </ul>
        </div>
        </p>
        <h2>Please click on Stock in the Top bar for next page</h2>
        </div>
    )
}
export default Landing;