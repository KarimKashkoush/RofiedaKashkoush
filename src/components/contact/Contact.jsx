import './contact.css'


function Contact() {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-container grid">
                <div className="contact-info">
                    <h3 className="contact-title">Let&apos;s talk about everything!</h3>
                    <p className="contact-details">Don&apos;t like forms? Send me an email. 👋</p>
                </div>

                <form className="contact-form">
                    <div className="contact-form-group">
                        <div className="contact-form-div">
                            <input type="text" className="contact-form-input" placeholder='Inhert your name' />
                        </div>

                        <div className="contact-form-div">
                            <input type="email" className="contact-form-input" placeholder='Inhert your email' />
                        </div>

                        <div className="contact-form-div">
                            <input type="text" className="contact-form-input" placeholder='Inhert your subject' />
                        </div>

                        <div className="contact-form-div contact-form-area">
                            <textarea className='contact-form-input' placeholder='Write your message'></textarea>
                        </div>
                    </div>

                    <button className="btn">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact