const counter = (state = 0, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      return action.payload
    case 'INCREMENT_COUNTER':
      return state + 1
    case 'DECREMENT_COUNTER':
      return state - 1
    case 'RESET_COUNTER':
      return 0
    default:
      return state
  }
}

export default counter
