// tailwind.config.js
module.exports = {
    mode: 'jit', // Enable Just-In-Time mode for faster builds
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused styles in production
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
  