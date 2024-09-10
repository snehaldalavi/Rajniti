module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors : {
        red : {
          '50' : '#ef3345'
        },
        gray : {
          '100' : '#f6f6f6',
          '200' : 'rgb(255 255 255 / var(--tw-text-opacity))'
        },
      },
      fontSize : {
        'xxs' : '11px',
        'xs1' : '13px',
        '5xl1' : '50px'
      },
      fontFamily : {
        'sans' : 'Montserrat, sans-serif',
      },
      width : {
        '100' : '100%',
        '97' : '650px'
      },
      padding : {
        '21' : '90px',
        '53' : '215px'
      },
    },
  },
  plugins: [],
}
