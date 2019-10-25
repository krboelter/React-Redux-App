import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchPeople } from "./actions/people";
// import Selectors from './components/Selectors';
import Person from "./components/Person";

function App(props) {

  useEffect(() => {
    props.fetchPeople();
  }, [])

  return (
    <div className="App">
      <h1>Select a character to see their information!</h1>
      {/* <Selectors people={props.people} /> */}
      <Person person={props.people} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    people: state.people.people
  }
}

const mapDispatchToProps = {
  fetchPeople
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
