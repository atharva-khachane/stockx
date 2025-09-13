import React from 'react';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#" className='ms-5'>
                    <img className='ms-5 mt-2 mb-2' src="media/images/stockx_logo.png" style={{width: "20%"}} alt="Logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight: "5%"}}>
                <form class="d-flex" role="search">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="#">Signup</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="#">Product</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link"  aria-current="page" href="#">Support</a>
                        </li>
                    </ul>

                </form>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;