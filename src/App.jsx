import './App.css'
import BrowseJobs from './BrowseJobs'
import Flexiwork from './Flexiwork'
import Hero_Section from './Hero_Section'
import Hero_section2 from './Hero_section2'
import Hero_Slider from './Hero_Slider'
import JobsCategory from './JobsCategory'
import Navbar from './Navbar'
import Posts from './Post'
function App() {
  return <div>
    {/* <Flexiwork/>
    <Posts/> */}
    <Navbar/>
    <Hero_Section/>
    <Hero_Slider/>
    <JobsCategory/>
    <div className="App">
      <BrowseJobs />
    </div>
    <Hero_section2/>

    </div>
}
export default App
