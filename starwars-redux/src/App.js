import React from 'react';
import './App.css';
import Selector from './components/Selector';
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Select a character to see their information!</h1>
      <Selector />
    </div>
  );
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
