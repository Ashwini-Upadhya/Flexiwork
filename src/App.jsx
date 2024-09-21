import './App.css'
import BrowseJobs from './BrowseJobs'
import CategoriesSection from './CategoriesSection'
import Footer from './Footer'
import Hero_Section from './Hero_Section'
import Hero_section2 from './Hero_section2'
import Hero_Slider from './Hero_Slider'
import JobsCategory from './JobsCategory'
import Navbar from './Navbar'

function App() {
  return <div>
    <Navbar/>
    <Hero_Section/>
    <Hero_Slider/>
    <JobsCategory/>
    <div className="App">
      <BrowseJobs />
    </div>
    <CategoriesSection/>
    <Hero_section2/>
    <Footer/>
    </div>
}
export default App
