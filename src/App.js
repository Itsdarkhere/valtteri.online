import './App.css';
import { GithubCTA } from './components/GithubCTA';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { Recommendation } from './components/Recommendation';
import { Skills } from './components/Skills';
import { Socials } from './components/Socials';
import { WorkHistory } from './components/WorkHistory';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header_container'>
          <img className='header_img' src="https://ik.imagekit.io/s93qwyistj0/valtteriOnline/heading_cube_l-ZHHiM7Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663977666465" alt="cube" />
          Valtteri Juvonen
        </div>
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
