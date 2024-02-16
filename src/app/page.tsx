import Hero from "@/components/Hero/Hero";
import About from "@/components/about/about";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

export default function Home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    );
}
