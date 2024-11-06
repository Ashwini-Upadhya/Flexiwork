import React from 'react';
import './Footer.css'; // We'll create styles in this file
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="brand-section">
          <br />
          <a className="navbar-logo" href="#">
          <span className="white">Flexi</span>Work
        </a>
            <p className="built-india">Built with ❤️ in India for the world</p>
          </div>
          
          <div className="contact-info">
            <h3>Stay Connected</h3>
           
            <p>📧 sales@unstop.com</p>
            <p>📞 +91-9311777388 (Mon to Fri, 9 AM to 6 PM)</p>
            <br />
            
            <p><strong>Support Inquiries:</strong></p>
            <p>📧 support@unstop.com</p>

<br />
            <div className="social-media">
              <a href="#" className='list'><InstagramIcon/></a>
              <a href="#" className='list'><LinkedInIcon/></a>
              <a href="#" className='list'><FacebookIcon/></a>
              <a href="#" className='list'><TwitterIcon/></a>
              <a href="#" className='list'><YouTubeIcon/></a>
            </div>
          </div>

          <div className="newsletter">
            <p><strong>Stay Updated</strong></p>
            <p>We'll send you updates on the latest opportunities.</p>
            <br />
            <div className='form'>
            <input type="email" placeholder="Sign up for our newsletter" />
            {/* <input type="text" placeholder="Your email address"> */}
            <button class="normal">Sign up</button>
            </div>
           
          </div>
        </div>

        

        <div className="footer-middle">
        <br />
          <h3>Our Solutions</h3>
          <br />
          <ul>
            <a href="#" className='list'><li>Hiring</li></a>
            <a href="#" className='list'><li>Engagement</li></a>
            <a href="#" className='list'><li>Assessment</li></a>
          </ul>
          <br />

          <h3>Our Products</h3>
          <br />
          <ul>
            <a href="#" className='list'><li>Proctoring</li></a>
            <a href="#" className='list'><li>Coding Interview Platform</li></a>
          </ul>
          <br />
          <h3>Mentorship</h3>
          <br />
          <ul>
            <a href="#" className='list'><li>Be a Mentor</li></a>
            <a href="#" className='list'><li>Explore Mentors</li></a> 
            <a href="#" className='list'><li>Mentorship Blogs</li></a>
          </ul>
        </div>

        <div className="footer-right">
        <br />
          <h3>Participate</h3>
          <br />
          <ul>
          <a href="#" className='list'><li>Competitions & Challenges</li></a>
          <a href="#" className='list'><li>Quizzes</li></a>
          <a href="#" className='list'><li>Hackathons</li></a>
          </ul>
          <br />
          <h3>Learn</h3>
          <br />
          <ul>
          <a href="#" className='list'><li>Courses</li></a>
          <a href="#" className='list'><li>Articles</li></a>
          <a href="#" className='list'><li>Workshops</li></a> 
          </ul>
          <br />
          <h3>Practice</h3>
          <br />
          <ul>
          <a href="#" className='list'><li>5 Days Interview Prep</li></a>
          <a href="#" className='list'><li>Code & Ace Hiring Assessments</li></a>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
      <br />
        <p>Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera & Safari</p>
        <p>Copyright © 2024 FLIVE Consulting Pvt Ltd - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
