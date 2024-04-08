import './about.css'
// @ts-ignore
import AboutImg from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'

function About() {
    return (
        <section className="about container section" id='about'>
            <h1 className="section-title">
                about me
            </h1>

            <div className="about-container grid">
                <img src={AboutImg} className='about-img' />
                <div className="about-data grid">
                    <div className="about-info">
                        <p className="about-description">
                            I am an architect and experienced architect with a passion for creating sustainable and functional designs. I have more than two years of experience in the field, and I have worked on a variety of projects.
                        </p>
                        <button className="btn">
                            <a href="">download cv</a>
                        </button>
                    </div>

                    <div className="about-skills grid">
                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">AutoCAD</h3>
                                <span className="skills-number">90%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage AutoCAD"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">3dMaxs</h3>
                                <span className="skills-number">90%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage dMaxs"></span>
                            </div>
                        </div>

                        <div className="skills-data">
                            <div className="skills-title">
                                <h3 className="skills-name">Revet</h3>
                                <span className="skills-number">90%</span>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage Revet"></span>
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



