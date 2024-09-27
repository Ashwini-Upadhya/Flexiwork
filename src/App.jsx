import './App.css'
import BrowseJobs from './BrowseJobs'
import CategoriesSection from './CategoriesSection'
import Footer from './Footer'
import Hero_Section from './Hero_Section'
import Hero_section2 from './Hero_section2'
import Hero_Slider from './Hero_Slider'
import Jobpostform from './jobpostform'
import JobsCategory from './JobsCategory'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar remains consistent across pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Route for post job form */}
          <Route path="/post-form" element={<Jobpostform />} />
          
          {/* The rest of the components will be available on the main route */}
          <Route
            path="/"
            element={
              <>
                <Hero_Section />
                <Hero_Slider />
                <JobsCategory />
                <BrowseJobs />
                <CategoriesSection />
                <Hero_section2 />
              </>
            }
          />
        </Routes>

        {/* Footer remains at the bottom */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
