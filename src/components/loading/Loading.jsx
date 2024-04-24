import './loading.css'
import Lottie from "lottie-react";
import loadingImage from '../../../public/animation/loading.json'

export default function Loading() {
    return (
        <section className="loading">
            <Lottie animationData={loadingImage} className="animation" />
        </section>
    )
}
