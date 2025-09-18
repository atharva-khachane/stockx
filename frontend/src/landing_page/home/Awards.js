import React from 'react';
function Awards() {
    return ( 
        <div className="container p-5">
            <div className="row mt-2">
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="Largest Broker"/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5 mt-3'>2+ million StockX clients contribute over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'><p>Futures & Options</p></li>
                                <li className='mt-2'><p>Commodity Derivatives</p></li>
                                <li className='mt-2'><p>Currrency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'><p>Stocks & IPOs</p></li>
                                <li className='mt-2'><p>Direct Mutual Funds</p></li>
                                <li className='mt-2'><p>Bonds & Government Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img className="mt-3" style={{width: "95%"}} src="media/images/pressLogos.png" alt="Press Logos"/>
                </div>
            </div>
        </div>
     );
}

export default Awards;