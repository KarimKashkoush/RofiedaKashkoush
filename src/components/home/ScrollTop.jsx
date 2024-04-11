import { useEffect, useState } from 'react';
import './home.css'

function ScrollTop() {
    const [showButton, setShowButton] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <section className="scroll-top" onClick={() => { scrollTop() }}>
                    <i className="fa-solid fa-angles-up"></i>
                </section>
            )}
        </>
    )
}


export default ScrollTop