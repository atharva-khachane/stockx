import React from 'react';
import { Link } from 'react-router-dom';
function Team() {
    return ( 
        <div className="container pt-5 border-top">
            <div className="row text-center">
                <h1 className='fs-4'>People</h1>
            </div>
            <div className="row p-5  text-justify text-muted" style={{fontSize: '.9em',fontFamily: 'Sora, sans-serif', lineHeight: '1.8'}}>
                <div className="col p-5 text-center">
                    <img
                        src="/media/images/atharvaK.png"   // <-- replace with your image path
                        alt="Atharva Khachane - Founder of StockX"
                        style={{borderRadius:"100%",width: "45%" }}
                    />
                    <h5 className='mt-3'>Atharva Khachane</h5>
                    <h6>Founder, CEO</h6>
                </div>                
                <div className="col pt-5">
                    <p className="mb-4">
                        Atharva Khachane founded <strong>StockX</strong> with the vision of creating a seamless, transparent,
                        and modern stock trading experience for Indian investors. What began as an idea to remove barriers
                        of cost, support, and technology has now evolved into a growing ecosystem of trading and investment tools.
                        </p>
                        
                        <p className="mb-4">
                        Outside of work, he enjoys exploring new ideas, learning continuously, and finding balance through
                        fitness and personal growth.
                        </p>
                        <p>
                        Connect with Atharva on <a href="https://www.linkedin.com/in/atharvakhachane" style={{textDecoration:"None"}}>LinkedIn</a> 
                    </p>


                </div>                
            </div>
        </div>
     );
}

export default Team;