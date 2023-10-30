// About.js

import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', color: 'black', fontFamily: 'Arial', padding: '20px' }}>
      <h1>About Us</h1>
      <p>We are a team of developers.</p>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
        <tr>
          <td>Rajan Jha</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>King</td>
          <td>Designer</td>
        </tr>
      </table>
      <img src="your_image_url" alt="your_image_alt" />
    </div>
  );
};

export default About;
