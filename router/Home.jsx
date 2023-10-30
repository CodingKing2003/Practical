// Home.js

import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', color: 'black', fontFamily: 'Arial', padding: '20px' }}>
      <h1>Home</h1>
      <p>Welcome to our website.</p>
      <table border="1">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Rajan</td>
          <td>Jha</td>
        </tr>
        <tr>
          <td>King</td>
          <td>Jha</td>
        </tr>
      </table>
      <img src="your_image_url" alt="your_image_alt" />
    </div>
  );
};

export default Home;
