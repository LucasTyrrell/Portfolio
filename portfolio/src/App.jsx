import { Navbar } from "./assets/layout/navbar"
import { About } from "./assets/sections/about"
import { Hero } from "./assets/sections/hero"
import { Projects } from "./assets/sections/projects"


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  </div>
}

      

  


export default App
