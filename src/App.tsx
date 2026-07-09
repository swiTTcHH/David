import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import EduCert from "./components/EduCert"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="w-[85%] md:w-[70%] mx-auto pb-24">
        <Nav />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <EduCert />
        <Contact />
      </div>
    </div>
  )
}

export default App

