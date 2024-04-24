import './home.css'
// @ts-ignore
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import me from '../../../public/animation/personal-photo.json'
// @ts-ignore
import Shapes from './Shapes'
import Lottie from 'lottie-react'
function Home() {
    return (
        <section className="home container" id='home'>
            <Shapes />
            <div className="intro">
                <Lottie animationData={me} className='home-img'/>
                <h1 className="home-name">Rofieda Mohamed Kashkoush</h1>
                <span className="home-education">i&apos;m a architecture engineer</span>

                <HeaderSocial />

                <button className="btn">
                    <a href="https://drive.google.com/file/d/1iNHNqLL-38M7xWSeMiaO1fOCVSpRfah6/view?usp=sharing" target='_blank' id="content">hire me</a>
                </button>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home