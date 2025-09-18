import React from 'react';

function Hero() {
    return ( 
        <div className="p-5  mt-5 mb-5 container text-center hero border-bottom">
            <h1 className='fs-2'>StockX Products</h1>
            <h3 className='pt-3 fs-5 text-muted fw-normal'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='pt-2'>Check out our <a style={{textDecoration: 'none'}} href="">investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
     );
}

export default Hero;