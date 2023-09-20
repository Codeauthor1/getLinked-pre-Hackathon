import HeroSection from "./HeroSection"
import NavBar from "./NavBar"

function RootContainer() {
    return <section className="root-container">
        <NavBar />
        <HeroSection/>
    </section>
}

export default RootContainer