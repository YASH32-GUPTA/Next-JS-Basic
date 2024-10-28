import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      {/* Info Part */}
        <div className="row text-center mediumSpace">
              <div className="col-12">
                    <h1 className='mainHeadingColor mainHead'>The React Framework for the Web</h1>
              </div>
              <div className="col-12 mt-5">
                  <h3 className='subFontColor subHead'>
                  Used by some of the world's largest companies, Next.js enables you to create 
                  &nbsp;<span className='mainHeadingColor'>high-quality web applications</span>&nbsp; 
                  with the power of React components.
                  </h3>
              </div>
        </div>
        {/* buttons */}
        <div className="row text-center mediumSpace">
              <div className="col-12">
              <button className="btn btn-outline-success whiteButton" type="submit">Get Started</button>
              <button className="btn btn-outline-success" style={{marginLeft : '2%'}} type="submit">Learn Next.js</button>
              </div>
              <div className="col-12 mt-3">
                  <p className='npm subFontColor'>
                      <img src="/favicon.ico" alt="Logo" />
                      ~ npx create-next-app@latest
                  </p>
              </div>
        </div>
    </div>
  )
}

export default Hero