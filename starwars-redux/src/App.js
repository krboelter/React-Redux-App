import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchPeople } from "./actions/people";
import PersonList from "./components/PersonList";

function App(props) {

  useEffect(() => {
    props.fetchPeople();
  }, [])

  return (
    <div className="App">
      <h1>Select a character to see their information!</h1>
      <PersonList people={props.people} />
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
