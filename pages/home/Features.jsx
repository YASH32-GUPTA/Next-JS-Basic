import React from 'react'
import Card from '../../component/Card'

const Features = () => {
  return (
    <div className="container mediumSpace box">
        <div className="row">
            <div className="col-4">
                 {/* INFO HEADER */}
                 <h1 className='mainHeadingColor featureFont'>What's in Next.js?</h1>
            </div>
            <div className="col-8 removeSpace">
                 <h3 className='subHead subFontColor'>Everything you need to build great products on the web.</h3>
            </div>
        </div>
        {/* Card Content */}
        <div className="row">
            <div className="col-12 d-flex ">
                {/* <Card/> */}
                <Card image={'/1.png'} title={'Built-in Optimizations'} text={'Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.'}/>
                <Card  image={'/2.png'} title={'React Server Component'} text={'Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client'}/> 
                <Card  image={'/3.png'} title={'Next Gen Framework'} text={'An instant loading state is fallback UI that is shown immediately upon navigation.'}/>
            </div>
            <div className="col-12 d-flex">
                <Card title={'Data Fetching'} text={'Learn best practices for fetching data on the server or client in Next.js.'}/>
                <Card   title={'Server Actions'} text={'Learn how to handle form submissions and data mutations with Next.js.'}/> 
                <Card  title={'Middlewares'} text={'Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization.Client and Server Rendering'}/>
            </div>
        </div>
    </div>
  )
}

export default Features