import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

export default function Card () {
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}