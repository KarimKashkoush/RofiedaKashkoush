import './portfolio.css';
import Menu from './Menu';
import { useState } from 'react';


function Portfolio() {
    // @ts-ignore
    const [currentBtn, setCurrentBtn] = useState("All Projects")
    // @ts-ignore
    const [items, setItems] = useState(Menu)
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curEle)=>{
            return curEle.category === categoryItem;
        });

        setItems(updatedItems)
    }
    return (
        <section className="work container section" id='work'>
            <h2 className="section-title">
                Recent Works
            </h2>

            <div className="work-filters">
                <span onClick={() => { setCurrentBtn('All Projects'); setItems(Menu) }} className={`work-item ${currentBtn === "All Projects" ? "active" : null}`} >All projects</span>
                <span onClick={() => { setCurrentBtn('Bathroom'); filterItem('Bathroom') }} className={`work-item ${currentBtn === "Bathroom" ? "active" : null}`} >Bathroom</span>
                <span onClick={() => { setCurrentBtn('kitchen'); filterItem('kitchen') }} className={`work-item ${currentBtn === "kitchen" ? "active" : null}`} >kitchen</span>
                <span onClick={() => { setCurrentBtn('living'); filterItem('living') }} className={`work-item ${currentBtn === "living" ? "active" : null}`} >Living</span>
                <span onClick={() => { setCurrentBtn('bedroom'); filterItem('bedroom') }} className={`work-item ${currentBtn === "bedroom" ? "active" : null}`} >Bedroom</span>
                <span onClick={() => { setCurrentBtn('dresing'); filterItem('dresing') }} className={`work-item ${currentBtn === "dresing" ? "active" : null}`} >Dresing</span>
                <span onClick={() => { setCurrentBtn('extriour'); filterItem('extriour') }} className={`work-item ${currentBtn === "extriour" ? "active" : null}`} >Extriour</span>
                <span onClick={() => { setCurrentBtn('Children-room'); filterItem('Children-room') }} className={`work-item ${currentBtn === "Children-room" ? "active" : null}`} >Children Room</span>
                <span onClick={() => { setCurrentBtn('ladder'); filterItem('ladder') }} className={`work-item ${currentBtn === "ladder" ? "active" : null}`} >Ladder</span>
                <span onClick={() => { setCurrentBtn('administrative-Offices'); filterItem('administrative-Offices') }} className={`work-item ${currentBtn === "administrative-Offices" ? "active" : null}`} >Administrative Offices</span>
            </div>

            <div className="work-container grid">
                {items.map((ele) => {
                    const { id, image, title, category } = ele;
                    return (
                        <div className="work-card" key={id}>
                            <div className="work-thumbnail">
                                <img src={image} className='work-img' />
                                <div className="work-mask"></div>
                            </div>

                            <span className="work-category">{category}</span>
                            <h3 className='work-title'>{title}</h3>
                            <a href="" className="work-button">
                                <i className="icon-link work-button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio