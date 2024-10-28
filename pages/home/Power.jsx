import React from 'react'
import Card from '../../component/Card'

const Power = () => {
  return (
    <div className="container mediumSpace box">
        <div className="row text-center">
            <div className="col-12">
                 {/* INFO HEADER */}
                 <h1 className='mainHeadingColor featureFont'>Built on a foundation of fast, production-grade tooling</h1>
            </div>
        </div>
        {/* Card Content */}
        <div className="row">
            <div className="col-12 d-flex ">
                {/* <Card/> */}
                <Card logo={true} image={'/react.svg'} title={'React'} text={'React lets you build user interfaces out of individual pieces called components.'}/>
                <Card logo={true} image={'/turbopack.svg'} title={'Turbo Pack'} text={'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.'}/> 
                <Card logo={true} image={'/swc.svg'} title={'Speedy Web Compiler'} text={'SWC is an extensible Rust-based platform for the next generation of fast developer tools. Its used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel'}/>
            </div>
        </div>
    </div>
  )
}

export default Power