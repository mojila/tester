import React from 'react'
import State from './state'
import Action from './action'

const MainContext = React.createContext()
const MainProvider = MainContext.Provider
const MainConsumer = MainContext.Consumer
const MainState = State
const MainAction = Action

export default MainContext
export { MainProvider, MainConsumer, MainState, MainAction }