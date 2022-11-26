import React from 'react';
import background from '../../assets/bg_image_1.jpeg';

const Header = () => {
  return (
    <div className="vg-page page-home" style={{ 
        backgroundImage: `url("${background}")` 
      }}>
        <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
        <div className="container">
            <a href="index.html" className="navbar-brand">V-Folio</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
            <span className="ti-menu"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
                </li>
                <li className="nav-item">
                <a href="#about" className="nav-link" data-animate="scrolling">About</a>
                </li>
                <li className="nav-item">
                <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
                </li>
                <li className="nav-item">
                <a href="#blog" className="nav-link" data-animate="scrolling">Blog</a>
                </li>
                <li className="nav-item">
                <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
                </li>
            </ul>
            <ul className="nav ml-auto">
                <li className="nav-item">
                <button className="btn btn-fab btn-theme no-shadow">En</button>
                </li>
            </ul>
            </div>
        </div>
        </div>
    
        <div className="caption-header text-center wow zoomInDown">
        <h5 className="fw-normal">Welcome</h5>
        <h1 className="fw-light mb-4">I'm <b className="fg-theme">Binh</b> Tran</h1>
        <div className="badge">Frontend Developer</div>
        </div>
        <div className="floating-button"><span className="ti-mouse"></span></div>
    </div>
  )
}

export default Header