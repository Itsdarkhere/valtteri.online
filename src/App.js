import './App.css';
import { GithubCTA } from './components/GithubCTA';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { Recommendation } from './components/Recommendation';
import { Skills } from './components/Skills';
import { Socials } from './components/Socials';
import { WorkHistory } from './components/WorkHistory';
import header_cube from "./assets/images/heading_cube.png"

function App() {
  return (
    <div className="App">
      <header className='header'>
            <img className='header_img' src={header_cube} alt="cube" />
            Valtteri Juvonen
      </header>
      <HeroSection />
      <Projects />
      <Skills />
      <GithubCTA />
      <WorkHistory />
      <div className='section_divider'></div>
      <Recommendation />
      <Socials />
    </div>
  );
}

export default App;
