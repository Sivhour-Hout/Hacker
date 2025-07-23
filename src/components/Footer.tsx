import React from 'react';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f9f9f4',
      padding: '1rem',
      fontSize: '0.875rem',
      color: '#333',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        Consider applying for YC&apos;s Fall 2025 batch! Applications are open till Aug 4
      </div>
      <nav style={{ marginBottom: '0.5rem' }}>
        {['Guidelines', 'FAQ', 'Lists', 'API', 'Security', 'Legal', 'Apply to YC', 'Contact'].map((link, i, arr) => (
          <span key={link}>
            <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{
              color: '#555',
              textDecoration: 'none',
              margin: '0 0.25rem',
            }}>
              {link}
            </a>
            {i < arr.length - 1 && <span style={{ color: '#aaa' }}> | </span>}
          </span>
        ))}
      </nav>
      <div>
        <label htmlFor="search" style={{ color: '#888', marginRight: '0.5rem' }}>Search:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          style={{
            padding: '0.25rem 0.5rem',
            border: '1px solid #ccc',
            borderRadius: '3px',
            fontSize: '0.875rem',
          }}
        />
      </div>
    </footer>
  );
}