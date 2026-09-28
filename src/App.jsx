import { Navbar } from "./assets/layout/navbar"
import { Hero } from "./assets/sections/hero"
import { Contacts } from "./assets/sections/contacts"
import { Projects } from "./assets/sections/projects"
import { Experience } from "./assets/sections/experience"


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  </div>
}

      

  


export default App
