const homeStyles = {
  main: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: '2rem 0 0 0',
    background: 'eee',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    maxHeight: '200px',
    maxWidth: '200px',
  },
  counter: {
    fontSize: '5rem',
    fontWeight: 'lighter',
    padding: '0.5rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    maxHeight: '50px',
    transition: 'all 0.1s',
    filter: 'invert(.5)',
    ':hover': {
      filter: 'invert(.5) sepia(1) saturate(5) hue-rotate(180deg)',
      transform: 'translateY(-1px)'
    }
  }
};

export default homeStyles;
