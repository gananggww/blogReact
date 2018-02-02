const defaultState = {
  articles: null
}

const articleReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'ARTICLES':
      return {...state, articles: action.payload}
    default:
      return state
  }

}

export default articleReducer
