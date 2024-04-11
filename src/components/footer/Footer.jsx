import './footer.css'

function Footer() {
    let date = new Date().getFullYear();

    return (
        <footer>
            <p>
                &copy; {date} <a href="https://karimkashkoush.vercel.app/">Karim Kashkoush</a>. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer