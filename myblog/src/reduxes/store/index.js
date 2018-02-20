import { createStore, applyMiddleware } from 'redux'
import articles from '../reducer/'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const midty = applyMiddleware(logger, thunk)
const store = createStore(articles, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ,midty)

export default store
