import React from 'react';

function Hero() {
    return ( 
        <div className="container-fluid pt-5 pb-5" id='support-hero' style={{color:"white"}}>
            <div className="row">
                <div className="col text-start">
                    <h3 className='fs-5 fw-normal'>Support Portal</h3>
                </div>
                <div className="col text-end mx-5 px-5">
                    <a href="" style={{textDecoration:"None",color:"white"}}>Track Tickets</a>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col text-start">
                    <h1 className='fs-3 fw-normal'>Search for an answer or browse<br/> help topics to create a ticket</h1>
                    <div className="mt-4">
                        <input type="text" className="form-control form-control-lg" placeholder="Ex. How do I activate F&O" style={{width: "90%"}}/>
                    </div>
                    <div className="mt-4">
                    <a href="" style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>Track segment activation </a>&nbsp;&nbsp;
                    <br/>
                    <a href="" style={{color:"white"}}>Intraday margins </a>&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>Kite user manual </a>
                    </div>
                </div>
                <div className="col mx-5 px-5">
                    <h1 className='fs-3 fw-normal'>Featured</h1>
                    <ol type='1'>
                        <li>
                            <a href="" style={{color:"white"}}>Current Takeovers and Delisting - September 2025</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href="" style={{color:"white"}}>Latest Intraday Leverages</a>&nbsp;&nbsp;
                        </li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;