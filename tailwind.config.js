module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat','Arial'],
      'josefin_sans': ['"Josefin Sans"', 'sans-serif'],
      sans: 'var(--font-sans)',
    },
    colors: {
      'gray':'#f2f3ff',
      'white': '#ffffff',
      'black-blur': 'rgba(23,32,46,0.5)',
      'primary-blue':'#1364FB',
      'primary-orange':'#FBBC4B',
      'light-blue':'#DCE4F3',
      'light-orange':'#f7d392',
      'transparent':'transparent'
    },
    extend: {
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        grayText: 'var(--text-gray)',
        darkGray: 'var(--dark-gray)',
      },
      boxShadow: {
        base: '0px 2px 10px var(--box-shadow)',
        second: '0px 2px 10px var(--box-shadow-2)',
      },
      flex: {
        '1/2': '0 0 calc(50% - 10px)',
        '1/3': '0 0 calc(33.333% - 10px)',
      },
      maxWidth: {
        'screen-xl': '1360px',
      },
      screens: {
        //xs: { min: '240px', max: '450px' },
        //sm: { min: '450px', max: '768px' },
        'sm': '757px',
        'ltsm': {'max' : '756px'}
      },
    },
  },
  plugins: [],
};
