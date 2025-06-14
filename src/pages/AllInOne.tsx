import PageLayout from "@/components/PageLayout";
import Footer from "@/components/Footer";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const AllInOne = () => (
    <>
        <section id="home">
            <Home hideFooter={true} />
        </section>
        <section id="about" className="mt-24">
            <About hideFooter={true} />
        </section>
        <section id="projects" className="mt-24">
            <Projects hideFooter={true} />
        </section>
        <section id="skills" className="mt-24">
            <Skills hideFooter={true} />
        </section>
        <section id="experience" className="mt-24">
            <Experience hideFooter={true} />
        </section>
        <section id="contact" className="mt-24">
            <Contact hideFooter={true} />
        </section>
        <Footer />
    </>
);

export default AllInOne; 