/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
      'sm': '640px',
     

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  
    extend: {
      colors: {
        "primary-100":"#539AED",
        "primary-200":"#3c96fc",
        "primary-300":"#4A82C2",
        "primary-400":"#434F8D",
        "secondary-100": "#fff",
        "secondary-200": "#f5f7fa",
        
        "tertiary-100": "#012855",
        "tertiary-200": "#021326",
        "tertiary-300": "#000",
      
        
    
      
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #3c96fc, #3c96fc 50%, #021326 50%)',
         'pattern':
          "linear-gradient(to right bottom, rgba(74, 130, 194, 0.637), rgba(74, 130, 194, 0.337)), url('https://www.state.gov/wp-content/uploads/2023/02/shutterstock_1029307468-2560x852.jpg')",
      
       
   
        
      },
      fontFamily: {
        "poppins": [ 'Poppins', "sans-seri" ],
         "inter":[ 'Inter', "sans-serif"]
      },
    
    },
  },
  plugins: [],
}

