import React from 'react'

const About = () => {
  return (
    <div className='container'>
        <div className="row text-center mt-5    ">
            {/* Header  */}
            <div className="col">
                <h1 className='mainHeadingColor featureFont'>The framework of choice when it matters</h1>
            </div>
        </div>
        {/* Photos */}
        <div className="row mt-5">
            {/* 3 */}
            <div className="col aboutImg">
                <img  src='/A5.png' alt='Logo1'/>
                <img  src='/A2.png' alt='Logo1'/>
                <img  src='/A4.png' alt='Logo1'/>
            </div>
            {/* 3 */}
            <div className="col aboutImg">
                <img  src='/A3.png' alt='Logo1'/>
                <img  src='/A1.jpg' alt='Logo1'/>
                <img  src='/A2.png' alt='Logo1'/>
            </div>
        </div>
        {/* Side Info */}
        <div className="row text-center mt-5">
            <div className="col-12 subFontColor markUp">
                 <h1>For <span>performance</span>, <span>efficiency</span> and <span>developer experience.</span>
                 Next.js is trusted by some of the biggest names on the web.</h1>
            </div>
            {/* button */}
            <div className="col mt-5">
                 <button className="btn btn-outline-success whiteButton" type="submit">Next.js Showcase</button>
            </div>
        </div>
    </div>
  )
}

export default About