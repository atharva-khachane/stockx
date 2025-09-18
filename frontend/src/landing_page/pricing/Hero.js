import React from 'react';

function Hero() {
    return ( 
        <div className="p-5  mt-3 mb-5 container text-center hero ">
            <h1 className='fs-2'>Charges</h1>
            <h3 className='pt-3 fs-5 text-muted fw-normal'>List of all charges and taxes</h3>
            <div className="row pt-3">
                <div className="col text-muted text-center">
                    <img src="media/images/pricing0.svg" alt=""/>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col text-muted text-center">
                    <img src="media/images/pricingEquity.svg" alt=""/>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col text-muted text-center">
                    <img src="media/images/pricingMF.svg" alt=""/>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>

     );
}

export default Hero;