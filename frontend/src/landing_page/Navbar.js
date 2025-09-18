import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/" className='ms-5'>
                    <img className='ms-5 mt-2 mb-2' src="media/images/stockx_logo.png" style={{width: "20%"}} alt="Logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight: "5%"}}>
                <form class="d-flex" role="search">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link"  aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link"  aria-current="page" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link"  aria-current="page" to="/product">Product</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link"  aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link"  aria-current="page" to="/support">Support</Link>
                        </li>
                    </ul>

                </form>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;