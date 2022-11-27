import React from 'react';
import Avatar from '../assets/tui.jpeg';
import ProgressBar from './ProgressBar';


const About = () => {
  return (
    <div className="vg-page page-about">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-4 py-3">
                    <div className="img-place wow fadeInUp">
                        <img src={Avatar} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 wow fadeInRight">
                <h1 className="fw-light">Binh Tran</h1>
                <h5 className="fg-theme mb-3">Frontend Developer</h5>
                <p className="text-muted">Developing our skills with the development of the company, I want to prove myself and contribute to the company.</p>
                <ul className="theme-list">
                    <li><b>From:</b> Phuoc Thanh commune, Tuy Phuoc district, Binh Dinh province.</li>
                    <li><b>Lives In:</b> 3/4/1A Street 9, Truong Tho Ward, Thu Duc District, Ho Chi Minh City</li>
                    <li><b>Phone:</b> 034 919 2011</li>
                    <li><b>Email:</b> tranbinhfc@gmail.com</li>
                    <li><b>Age:</b> 27</li>
                    <li><b>Gender:</b> Male</li>
                </ul>
                <a href="1.docx" download="1.docx">
                    <button className="btn btn-theme-outline">Download CV</button>
                </a>
                </div>
            </div>
        </div>
        <div className="container py-5">
            <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
            <div className="row py-3">
                <div className="col-md-6">
                <div className="px-lg-3">
                    <h4 className="wow fadeInUp">Coding skills</h4>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">PHP</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='70' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Ruby</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='60' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">HTML + CSS + SCSS</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='95' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">JavaScript</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='80' />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="px-lg-3">
                    <h4 className="wow fadeInUp">Coding Skills</h4>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Liquid</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='90' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Jquery</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='90' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">ReactJS(Prop, State, ES6, Hook)</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='60' />
                    </div>
                    </div>
                    <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">VueJS</span>
                    <div className="progress">
                        <ProgressBar className="progress-bar" bgcolor="#747474" progress='60' />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About