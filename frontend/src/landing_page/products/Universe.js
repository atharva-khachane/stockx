import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
            <h3 className='pt-5 fs-5 fw-normal text-muted text-center '>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration: 'none'}}>Stockx.tech</a> blog.</h3>
            <h1 className='text-center pt-5 mt-3 fs-3 fw-normal'>The StockX Universe</h1>
            <h3 className='pt-3 fs-6 fw-normal text-muted text-center '>Extend your trading and investment experience even further with our partner platforms</h3>
            <div className="row">
                <div className="col-4 p-3 mt-5 text-center">
                <img src="media/images/zerodhaFundHouse.png" />
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                <img src="media/images/dittoLogo.png" className='img-fluid' />
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                <img src="media/images/smallcaseLogo.png" />
                </div>
            </div>
            <div className="row">
                <div className="col-6 p-3 mt-5 text-center">
                <img src="media/images/streakLogo.png" />
                </div>
                <div className="col-6 p-3 mt-5 text-center">
                <img src="media/images/goldenpiLogo.png" className='img-fluid' />
                </div>
            </div>
        </div>
     );
}

export default Universe;