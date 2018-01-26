const headerStyles = {
  main: {
    background: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    height: '4rem',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    flex: 1,
    fontSize: '24px',
    padding: '16px',
    fontWeight: 'lighter',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    height: '4rem',
    transition: 'all 0.2s',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(255,255,255,.2)',
    },
  },
};

export default headerStyles;
