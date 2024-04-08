import './portfolio.css';
import Menu from './Menu';
import { useState } from 'react';


function Portfolio() {
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
                <span className="work-item" onClick={()=> setItems(Menu)}>ِAll projects</span>
                <span className="work-item" onClick={()=> filterItem('Creative')}>Cretive projects</span>
                <span className="work-item" onClick={()=> filterItem('Art')}>ِAll projects</span>
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