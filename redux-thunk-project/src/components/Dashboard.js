import React from "react";
import { fetchRandom, fetchAll, pageUp, pageDown } from "../actions";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className='dashboard-header'>
        <button onClick={props.fetchRandom}>Random Quote</button>
        <h1>Robert's Quote Generator</h1>
        <button onClick={props.fetchAll}>All Quotes</button>
      </div>

      <div className='page-container'>
      <button
        className={props.page === 0 ? "unavailable" : ""}
        onClick={props.pageDown}
      >
        Previous
      </button>
      <p>Page: {props.page + 1}</p>
      <button
        className={props.page === 20 ? "unavailable" : ""}
        onClick={props.pageUp}
      >
        Next
      </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    isFetching: state.isFetching,
    error: state.error,
    page: state.page
  };
};

export default connect(
  mapStateToProps,
  { fetchRandom, fetchAll, pageUp, pageDown }
)(Dashboard);
