import Navbar from "./Navbar";
import './CategoriesSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faPalette, faCode, faChartSimple, faCamera, faComputer } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Learn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="categories-section" style={{margin:'0px'}}>
        <a href='https://coursefolder.net/category/Business'  className="category-card internship"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faBusinessTime} style={{height:'50px'}}/>
          <h2>Business</h2>
        </a>
        <a href='https://coursefolder.net/category/Design'  className="category-card learn"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faPalette} style={{height:'50px'}}/>
          <h2>Design</h2>
        </a>
        <a href='https://coursefolder.net/category/Development'  className="category-card jobs"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faCode} style={{height:'50px'}}/>
          <h2>Development</h2>
        </a>
        <a href='https://coursefolder.net/category/Marketing'  className="category-card practice"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faChartSimple} style={{height:'50px'}}/>
          <h2>Marketing</h2>
        </a>
        <a href='https://coursefolder.net/category/Photography-Video'  className="category-card compete"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faCamera} style={{height:'50px'}}/>
          <h2>Photography & Video</h2>
        </a>
        <a href='https://coursefolder.net/category/IT-and-Software'  className="category-card mentorship"style={{justifyContent:'space-around',alignItems:'center',textDecoration:'none',color:'black',cursor:'pointer'}} >
          <FontAwesomeIcon icon={faComputer} style={{height:'50px'}}/>
          <h2>IT and Software</h2>
        </a>
      </section>
    </>
  );
};

export default Learn;
