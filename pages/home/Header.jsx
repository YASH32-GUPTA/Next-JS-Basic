import React from 'react'
import { useRouter } from 'next/router' ;

const Header = () => {
  const router = useRouter() ; 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary HomeColor">
  <div className="container-fluid">
    <a className="navbar-brand navLogo" href="#"><img src="/whiteLogo.jpeg" alt="Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Showcase</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Docs</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Template</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Enterprise</a>
        </li>

      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Documentation ..." aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Deploy</button>
        <button className="btn btn-outline-success whiteButton" type="submit" style={{marginLeft : '2%'}} onClick={()=>router.replace('/')}>Learn</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header