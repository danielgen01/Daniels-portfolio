import './App.css'
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
 </>
  )
}

export default App
