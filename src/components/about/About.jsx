import './about.css'
// @ts-ignore
import about from '../../../public/animation/about.json'
// @ts-ignore
import Lottie from 'lottie-react'
import AboutBox from './AboutBox'

function About() {
    return (
        <section className="about container section" id='about'>
            <h1 className="section-title">
                about me
            </h1>

            <div className="about-container grid">
                <Lottie animationData={about}/>
                <div className="about-data grid">
                    <div className="about-info">
                        <p className="about-description">
                            I am an architect and experienced architect with a passion for creating sustainable and functional designs. I have more than two years of experience in the field, and I have worked on a variety of projects.
                        </p>
                        <button className="btn">
                            <a href="https://drive.google.com/file/d/1iNHNqLL-38M7xWSeMiaO1fOCVSpRfah6/view?usp=sharing" target='_blank'>download cv</a>
                        </button>
                    </div>

                    <div className="about-skills grid">
                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">AutoCAD</h3>
                                <span className="skills-number">85%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage AutoCAD"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">Revit</h3>
                                <span className="skills-number">90%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage Revit"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">Adobe Photoshop</h3>
                                <span className="skills-number">80%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage Photoshop"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">V-Ray</h3>
                                <span className="skills-number">95%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage V-Ray"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">Corona</h3>
                                <span className="skills-number">80%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage Corona"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">3D Max</h3>
                                <span className="skills-number">90%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage D-Max"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About



