import React from 'react';

function RightSection({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-5 p-5">
                    <h1 className='fs-4'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className="row"    >
                        <a className="col-4" href={tryDemo} style={{textDecoration: 'none'}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="col-8" href={learnMore} style={{textDecoration: 'none'}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-7">
                    <img src={imageURL } alt={productName} className="img-fluid"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;