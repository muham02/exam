import React, { useReducer } from 'react'
import AppContext from '../store'
import reducer, {intialState} from '../reducer/reducer'
const StateProvider = ({children}) => {
  return (
   <AppContext.Provider value={useReducer(reducer,intialState)}>
{children}
   </AppContext.Provider>
  )
}

export default StateProvider