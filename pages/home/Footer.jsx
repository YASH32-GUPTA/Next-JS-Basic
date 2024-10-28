import React from 'react'

const Footer = () => {
  return (
    <div className='container  footerBox'> 
        <div className="row">
          {/* Logo and tag */}
            <div className="col-4 logoSetup">
                  <img src="/favicon.ico" alt="logo" style={{objectFit : 'cover' , height : '70px',width:'70px'}}/>
                  <h3 className='mainHeadingColor'>Vercel</h3>
            </div>
          {/* Sub Info */}
            <div className="col tags">
                  <div className="col-3">
                      <h4>Resources</h4><br />
                      <p>Docs</p><br />
                      <p>Learn</p><br />
                      <p>Showcase</p><br />
                      <p>Next.js Conf</p><br />
                  </div>
                  <div className="col-3">
                      <h4>More</h4><br />
                      <p>Next.js Commerce</p><br />
                      <p>Contact Sales</p><br />
                      <p>Governance</p><br />
                      <p>GitHub</p><br />
                  </div>
                  <div className="col-3">
                    <h4>About Vercel</h4><br />
                    <p>Next.js + Vercel</p><br />
                    <p>Open Source Software</p><br />
                    <p>GitHub</p><br />
                    <p>X</p><br />

                  </div>
                  <div className="col-3">
                    <h4>Legal</h4><br />
                    <p>Privacy Policy</p><br />
                  
                  </div>
            </div>
        </div>
        {/* Copyrights */}
        <div className="row mt-5">
            <div className="col rights">
             <h4>@ 2024 Vercel, Inc.</h4>
            </div>
        </div>
        <div className="row rightsImg mt-2">
            <div className="col-1" style={{borderRight : '1px solid #333'}}t>
                 <img src='/github.svg'></img>
            </div>
            <div className="col-1">
                <img src='/x.svg'></img>
            </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Footer