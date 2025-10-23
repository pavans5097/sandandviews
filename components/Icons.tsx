
import React from 'react';

export const FortIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 3a1 1 0 011-1h10a1 1 0 011 1v3h-3.5a.5.5 0 00-.5.5v1.5H12v-2h2V3H6v2h2v2H6.5V6.5a.5.5 0 00-.5-.5H2V3a1 1 0 011-1zM1 9h18v8a1 1 0 01-1 1H2a1 1 0 01-1-1V9zm2 2v4h3V11H3zm5 0v4h4V11H8zm5 0v4h3V11h-3z" clipRule="evenodd" />
  </svg>
);

export const FacebookIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const InstagramIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.01-4.7.068-2.7.123-3.973 1.404-4.1 4.1-.058 1.217-.067 1.583-.067 4.7s.01 3.483.067 4.7c.127 2.696 1.4 3.973 4.1 4.1 1.217.058 1.583.067 4.7.067s3.483-.01 4.7-.067c2.7-.127 3.973-1.403 4.1-4.1.058-1.217.067-1.583.067-4.7s-.01-3.483-.067-4.7c-.127-2.696-1.4-3.973-4.1-4.1-1.217-.058-1.583-.067-4.7-.067zm0 3.39c-1.897 0-3.433 1.536-3.433 3.433s1.536 3.433 3.433 3.433 3.433-1.536 3.433-3.433S13.897 7.355 12 7.355zm0 5.068c-1.03 0-1.864-.834-1.864-1.864s.834-1.864 1.864-1.864 1.864.834 1.864 1.864-.834 1.864-1.864 1.864zm4.965-5.32c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12z" />
  </svg>
);

export const TwitterIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

export const ArchitectureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M4 21V10M12 21V10M20 21V10M4 5l8-3 8 3" />
    </svg>
);

export const DesertIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 21H2c-1.104 0-2-1.01-2-2.25 0-.938 1.118-2.613 2.5-3.5 1-1 2-2.5 2.5-4C5.5 8.125 5 5 5 5s2 1 4 1h6s2-1 4-1c0 0-.5 3.125-1.5 5.25.5 1.5 1.5 3 2.5 4 1.382.887 2.5 2.562 2.5 3.5C24 19.99 23.104 21 22 21z" />
    </svg>
);

export const CultureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0m-12.728 0a9 9 0 000 12.728m0-12.728L12 12l5.657-5.657" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-2.828 2.828" />
    </svg>
);

export const ShoppingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const SunsetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a4 4 0 100-8 4 4 0 000 8zm0 0l-3 9h6l-3-9zM21 21H3" />
    </svg>
);

export const CuisineIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18M19 3v18M3 12h18M3 3h18M3 21h18M9 3v18M15 3v18M12 3a3 3 0 013 3v12a3 3 0 01-3 3 3 3 0 01-3-3V6a3 3 0 013-3z" />
    </svg>
);
