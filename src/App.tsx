import './App.css'
import Aboutme from './components/Aboutme/Aboutme'
import EndCard from './components/EndCard/EndCard'
import Navbar from './components/Navbar/Navbar'
import ProjectBanner from './components/Projects/ProjectBanner'
import TechStack from './components/TechStack/TechStack'
import Introduction from './components/TopIntroduction/Introduction'

function App() {
 return (
 <>
 <Navbar />
 <Introduction />
 <TechStack />
 <ProjectBanner />
 <Aboutme />
 <EndCard />
 </>
  )
}

export default App
