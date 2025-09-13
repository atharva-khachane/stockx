import React from 'react';

function Stats() {
    return ( 
        <div className="container p-5">
            <div className='row '>
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='mx-10 pr-10 text-muted'>That's why 1.3+ crore customers trust StockX with     3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='mt-3 fs-4'>No Spams or Gimmicks</h2>
                    <p className='mx-10 pr-10 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='mt-3 fs-4'>The StockX Universe</h2>
                    <p className='mx-10 pr-10 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mt-3 fs-4'>Do Better with Money</h2>
                    <p className='mx-10 pr-10 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img className="" src="media/images/ecosystem.png" alt="Ecosystem" style={{width: "90%"}}/>
                    <div className='text-center'>
                        <a className="mx-3" style={{textDecoration: "none"}} href="">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" className="mx-3"  style={{textDecoration: "none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;