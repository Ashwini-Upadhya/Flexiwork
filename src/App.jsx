import './App.css'
import BrowseJobs from './BrowseJobs'
import CategoriesSection from './CategoriesSection'
import Footer from './Footer'
import Hero_Section from './Hero_Section'
import Hero_section2 from './Hero_section2'
import Hero_Slider from './Hero_Slider'
import Jobpostform from './jobpostform'
import JobsCategory from './JobsCategory'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import FindJob from './FindJob'
import JobPostCard from './JobPostCard'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar remains consistent across pages */}
        

        {/* Define Routes */}
        <Routes>
          {/* Route for Login and Sign up */}
           <Route path="/login" element={<Login />} />
           <Route path='/Signup' element={<Signup/>} />

          {/* Route for post job form */}
          <Route path="/post-form" element={<Jobpostform />} />

          {/* Route for FindJOb */}
          <Route path="/findjob" element={<JobPostCard />} />
          
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
        
      </div>
    </Router>
  )
}

export default App
