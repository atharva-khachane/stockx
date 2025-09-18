import React from 'react';

function Footer() {
    return ( 
        <footer className='border-top mt-5 bg-light p-5'>

            <div className='container'>
                <div className="row" style={{fontSize: "14px"}}>
                    <div className="col">
                        <img src="media/images/stockx_logo.png" style={{width: "50%"}} alt=""/>
                        <p className='text-muted mt-1'>© 2025 - 2025, StockX Ltd.<br/>All rights reserved.</p>
                        <div>
                            <i class="fa fa-facebook-official fa-2x px-2 icons-trans"  aria-hidden="true"></i>
                            <i class="fa fa-twitter fa-2x px-2 icons-trans"  aria-hidden="true"></i>
                            <i class="fa fa-instagram fa-2x px-2 icons-trans"  aria-hidden="true"></i>
                            <i class="fa fa-linkedin fa-2x px-2 icons-trans"  aria-hidden="true"></i>                 
                        </div>
                    </div>
                    <div className="col">
                        <p className='mt-1'>Company</p>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>About</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Products</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Pricing</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Referral programme</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Careers</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Zerodha. tech</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Press & media</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Zerodha cares (CSR)</a><br/>
                    </div>
                    <div className="col">
                        <p className='mt-1'>Support</p>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Contact</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Support portal</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Z-Connect blog</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>List of changes</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Downloads and resources</a><br/>
                    </div>
                    <div className="col">
                        <p className='mt-1'>Account</p>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Open an account</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>Fund transfer</a><br/>
                            <a href="" className='text-muted' style={{textDecoration:"None",color:'black'}}>60 Day Challenge</a><br/>
                    </div>
                </div>
                <div className="row text-muted mt-4" style={{fontSize: "12px"}}>
                    <p>
                    StockX Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.: INZ0000XXXXXX. 
                        Depository services provided through StockX Broking Ltd. – SEBI Registration no.: IN-DP-XXX-20XX. 
                        Commodity Trading through StockX Commodities Pvt. Ltd. – SEBI Registration no.: INZ0000XXXXXX. 
                        Registered Address: StockX Broking Ltd., [Office Address], India.
                    </p>
                    <p>
                        For any complaints related to securities broking, write to{" "}
                        <a href="mailto:complaints@stockx.com">complaints@stockx.com</a>, and for depository services to{" "}
                        <a href="mailto:dp@stockx.com">dp@stockx.com</a>. Please ensure you carefully read the{" "}
                    Risk Disclosure Document as prescribed by SEBI.
                    </p>
                    <p>
                    Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. 
                        Mandatory details: Name, PAN, Address, Mobile Number, and E-mail ID.{" "}
                        <em>Benefits:</em> Speedy redressal and effective communication.
                    </p>
                    <p>
                    Attention Investors:
                        <ol>
                        <li>
                            Stock brokers can accept securities as margin only through pledge in the depository system 
                            (w.e.f. 01 September 2020).
                        </li>
                        <li>
                            Update your email and mobile number with your broker/depository to receive OTPs directly 
                            from NSDL/CDSL.
                        </li>
                        <li>
                            Check your securities, mutual funds, and bonds in the{" "}
                            <em>consolidated account statement</em> issued by NSDL/CDSL every month.
                        </li>
                        </ol>
                    </p>
                    <p>
                        Investments in the securities market are subject to market risks; please read all related documents 
                        carefully before investing. KYC is a one-time process through SEBI registered intermediaries; once done, 
                        you need not repeat it with every broker.
                    </p>
                    <p>
                        Prevent unauthorized transactions: Keep your mobile/email updated with your broker. You will receive 
                        trade confirmations directly from the exchange at the end of each trading day.
                    </p>
                    <p>
                        StockX does not provide stock tips, portfolio advisory, or trading on behalf of clients. 
                        If anyone claims otherwise, please report immediately at{" "}
                        <a href="mailto:support@stockx.com">support@stockx.com</a>.
                    </p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;