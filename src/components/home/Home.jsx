import './home.css'
// @ts-ignore
import me from '../../assets/avatar-1.svg'
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
// @ts-ignore
import Shapes from './Shapes'
function Home() {
    return (
        <section className="home container" id='home'>
            <Shapes />
            <div className="intro">
                <img src={me} className='home-img' />
                <h1 className="home-name">Rofieda Mohamed Kashkoush</h1>
                <span className="home-education">i&apos;m a architecture engineer</span>

                <HeaderSocial />

                <button className="btn">
                    <a href="" id="content">hire me</a>
                </button>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home