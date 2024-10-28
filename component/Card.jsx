import React from 'react'

const Card = ({title , text , image , logo = false}) => {
  return (
    <div className="card cardBox mt-5" style={{width : '18rem' , height : image ? '600px' : '300px'}}>
        {
          ( logo ) ?  image ? <div className='card-img'><img style={{height : '250px' , width : '150px' }} src={image} className="card-img-top" alt="..."/></div> : null
          :
           image ? <div className='card-img'><img src={image} className="card-img-top" alt="..."/></div> : null
        }
        <div className="card-body">
            <h3 className="card-title mainHeadingColor">{title}</h3>
            <p className="card-text subFontColor cardFont">{text}</p>
        </div>
    </div>
  )
}

export default Card