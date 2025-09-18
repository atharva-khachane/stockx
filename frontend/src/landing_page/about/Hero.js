import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className="container p-5">
            <div class="row text-center p-5 mb-5">
                <h1 className='fs-4 pt-3'>We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.</h1>
            </div>
            <div className="row p-5 mt-5 border-top text-justify text-muted" style={{fontSize: '.9em',fontFamily: 'Sora, sans-serif', lineHeight: '1.8'}}>
                <div className="col border-end p-5">
                    <p className="mb-4">
                        We started <strong><Link to="/" style={{textDecoration:"None"}}>StockX</Link></strong> to remove every barrier Indian traders and investors face—
                        costs, clunky support, and dated technology. The name mirrors our promise: <br/><b><i>StockX is where stock
                        investing feels effortless.</i></b>
                    </p>
                    <p className="mb-4">
                        With transparent pricing and in-house technology, we’re building a platform that’s fast,
                        dependable, and genuinely helpful—so you can focus on decisions, not on dealing with your tools.
                    </p>
                    <p className="mb-4">
                        Every day, thousands of investors place orders through our growing ecosystem of products—charts,
                        screeners, and APIs—designed to be powerful yet simple.
                    </p>
                </div>                
                <div className="col border-start p-5">
                    <p className="mb-4">
                        Beyond the platform, we invest in education and community initiatives so anyone can learn,
                        practice, and trade confidently.
                    </p>
                    <p className="mb-4">
                        We’re also partnering with emerging fintech builders to expand what’s possible for retail
                        investors in India.
                    </p>
                    <p className='mb-4'>
                        And we’re shipping constantly. Catch the latest on our blog, see what the community is saying,
                        and explore our product philosophy as we keep pushing StockX forward.
                    </p>

                </div>                
            </div>
        </div>
     );
}

export default Hero;