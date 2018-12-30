const homeStyles = {
  img: {
    maxHeight: '200px',
    maxWidth: '200px',
  },
  button: {
    maxHeight: '50px',
    transition: 'all 0.1s',
    filter: 'invert(.5)',
    ':hover': {
      filter: 'invert(.5) sepia(1) saturate(5) hue-rotate(180deg)',
      transform: 'translateY(-1px)',
    },
  },
}

export default homeStyles
