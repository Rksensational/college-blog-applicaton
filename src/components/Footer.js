import React from 'react';

const Footer = () => (
    <div className="site-footer">
      <h4 className="text-center">College Blog</h4>
      <p className="text-center">Follow us on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <i className="fab fa-facebook-f fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="google"
            >
              <i className="fab fa-google fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  
  export default Footer
