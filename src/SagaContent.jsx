import React from "react";
import { connect } from "react-redux";

const SagaContent = props => {
  const { fetching, dog, onRequestDog, error } = props;
  return (
    <div>
      <img src={dog} className="App-logo" alt="logo" />
      {dog ? (
        <p className="App-intro">Keep clicking for new dogs</p>
      ) : (
        <p className="App-intro">Replace the React icon with a dog!</p>
      )}
      {fetching ? (
        <button disabled>Fetching...</button>
      ) : (
        <button onClick={onRequestDog}>Request a Dog</button>
      )}
      {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,

    dog: state.dog,

    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaContent);
