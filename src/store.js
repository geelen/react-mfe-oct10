import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const DEFAULT_STATE = {
  entries: [
    {
      user_avatar: "http://fillmurray.com/128/128",
      messages: [
        "Line one",
        "Line two",
        "Line three",
      ]
    },
    {
      user_avatar: "http://fillmurray.com/132/132",
      messages: [
        "Line one",
        "Line two",
        "Line three",
      ]
    },
  ]
}

export const configureStore = () => {
  return createStore(
    reducers,
    DEFAULT_STATE,
    applyMiddleware(thunk, logger)
  )
}
