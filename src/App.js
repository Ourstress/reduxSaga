import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";

import Button from "./Button";
import SagaContent from "./SagaContent";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <SagaContent />
            <Button />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
