import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './screen/index.tsx';
import * as serviceWorker from './serviceWorker';
import { MainProvider, MainState, MainAction } from './context'

function Index () {
  const [store, dispatch] = useReducer(MainAction, MainState)

  return (
    <MainProvider value={{ store, dispatch }}>
      <App />
    </MainProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
