import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Education from "./Components/Education/Education"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

import { useRef } from "react";

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);


  return (
    < div className='w-screen scroll-smooth min-h-screen  bg-neutral-700'>
      <Navbar about={about} skills={skills} project={project} education={education} contact={contact} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects project={project} />
      <Education education={education} />
      <Contact contact={contact} />
      <Footer />
    </div>
  )
}

export default App
