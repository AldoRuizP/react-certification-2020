import React from 'react';

import './Footer.styles.css';

function Footer() {
  return (
    <div className="footer">
      <p>React Certification by Aldo Ruiz</p>
      <p>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">
          {' '}
          www.flaticon.com
        </a>
      </p>
      <p>
        <a
          href="https://iconscout.com/icon-pack/animal-flat-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Animal Flat Colors Icon Pack
        </a>
        by
        <a
          href="https://iconscout.com/contributors/kerismaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kerismaker
        </a>{' '}
        on
        <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer">
          Iconscout
        </a>
      </p>
    </div>
  );
}

export default Footer;
