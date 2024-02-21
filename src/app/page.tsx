import Hero from "@/components/Hero/Hero";
import About from "@/components/about/about";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Conversation from "@/components/Conversation";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Conversation/>
            <Footer/>
        </div>
    );
}
