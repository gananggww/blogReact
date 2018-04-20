const defaultState = {
  articles: []
}

const articleReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'ARTICLES':
      return {...state, articles: action.payload.map(item => item.title)}
    default:
      return state
  }

}

export default articleReducer
