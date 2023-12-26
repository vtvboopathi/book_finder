import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Google Book Finder. All Rights Reserved.</p>
        <p>Designed and developed by vtvboopathi@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;