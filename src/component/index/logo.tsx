import React, { useContext } from 'react'
import logo from './tester-logo.svg'
import '../../style/logo.scss'
import MainContext from '../../context'
import { actions } from '../../context/action'

function Logo() {  
  const { dispatch } = useContext(MainContext)

  return (
    <div className="logo">
      <img 
        height="360" 
        alt="tester-logo" 
        src={logo} 
        onClick={() => dispatch({ type: actions.LISTEN })}
      />
    </div>
  )
}

export default Logo
