const actions = {
  LISTEN: 'LISTEN'
}

function Action (state, action) {
  switch (action.type) {
    case actions.LISTEN:
      console.log('adaw')
      return state
    default:
      return state
  }
}

export default Action
export { actions }