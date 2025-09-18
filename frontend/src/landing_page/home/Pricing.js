import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-4 p-5">
                    <h1 className='fs-2 mb-3'>Unbeatable Pricing</h1>
                    <p className='mx-10'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2 p-5"></div>
                <div className="col-6 p-5">
                    <div className='row text-center'>
                        <div className="col border p-3">
                            <h1>&#8377;0</h1>
                            <p className='text-muted'>Free Equity Delivery and <br/> Direct Mutual Funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1>&#8377;20</h1>
                            <p className='text-muted'>Intraday and F&O</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;