import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/education.svg" style={{width: "80%" }} alt="Varsity Image"/>
                </div>
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-3'>Free and Open Market Education</h1>
                    <p className='mx-10'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced training.</p>
                    <a href="" style={{textDecoration: "none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5 mx-10    '><br/>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;