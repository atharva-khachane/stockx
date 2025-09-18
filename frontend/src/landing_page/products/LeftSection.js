import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlayURL,appStoreURL}) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-7">
                    <img src={imageURL } alt={productName} className="img-fluid"/>
                </div>
                <div className="col-5 p-5">
                    <h1 className='fs-4'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className="row">
                        <a className="col-6" href={tryDemo} style={{textDecoration: 'none'}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="col-6" href={learnMore} style={{textDecoration: 'none'}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <a href={googlePlayURL}><img src="media/images/googlePlayBadge.svg" alt="Google Play" className="mt-3"/></a>
                    <a href={appStoreURL} className="ms-3"><img src="media/images/appStoreBadge.svg" alt="App Store" className="mt-3"/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;