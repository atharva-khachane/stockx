 import React from 'react';
 
 function CreateTicket() {
    return ( 
        <div className="container pt-5">
            <div className="row">
                <h1 className='fs-3 pt-3'>To create a ticket, select a relevant topic</h1>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-4   ">
                    <h4 className='fs-5 pt-3 pb-3'><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <ul className="list-unstyled text-small mt-3" style={{fontSize: ".9em"}}>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Getting started</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Online</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Offline</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Charges</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Company, Partnership and HUF</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>NRI</a></li>
                    </ul>
                </div>
                <div className="col-4   ">
                    <h4 className='fs-5 pt-3 pb-3'><i className="fa fa-user" aria-hidden="true"></i> Your StockX Account</h4>
                    <ul className="list-unstyled text-small mt-3" style={{fontSize: ".9em"}}>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Login credentials</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Account modification and segment addition</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>DP ID and bank details</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Your profile</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className="col-4   ">
                    <h4 className='fs-5 pt-3 pb-3'><i className="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</h4>
                    <ul className="list-unstyled text-small mt-3" style={{fontSize: ".9em"}}>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Trading FAQs</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>StockX platforms</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Corporate actions</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Margins</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Product and order types</a></li>
                        <li className="pt-2" ><a href="" style={{textDecoration:"None"}}>Taxes</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
 }
 
 export default CreateTicket;