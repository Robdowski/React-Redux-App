import React, { useEffect } from "react";
import {
  fetchRandom,
  fetchAll,
  pageUp,
  pageDown,
  handleChanges,
  randomPage,
  handlePageChanges
} from "../actions";
import { connect } from "react-redux";

function Dashboard(props) {
  console.log("search value", props.search);
  useEffect(() => {
    props.fetchRandom();
  }, []);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Robert's Quote Generator</h1>
      </div>

      {props.quotes.length > 1 && (
          <div className="search-container">
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" onChange={props.handleChanges} value={props.search} />
            <button className="random-button" onClick={props.randomPage}>
            Random Page
          </button>
          </div>
      )}

      <div className="button-dashboard">
        <button
          className={props.page === 0 ? "unavailable" : ""}
          onClick={props.pageDown}
        >
          Previous
        </button>
        <button onClick={props.fetchAll}>All Quotes</button>
        <button onClick={props.fetchRandom}>Random Quote</button>
        <button onClick={props.pageUp}>Next</button>
        
        {props.quotes.length > 1 && (
          <div className="page-input-container">
          <p>Page: {Number(props.page) + 1}</p>
            <label htmlFor="page" name="page">
              Page Select:&nbsp;
            </label>
            <input
              className="page-input"
              name="page"
              htmlFor="page"
              onChange={props.handlePageChanges}
            />
            / {Math.floor(props.quotes.length / 4)}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    isFetching: state.isFetching,
    error: state.error,
    page: state.page,
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  {
    fetchRandom,
    fetchAll,
    pageUp,
    pageDown,
    handleChanges,
    randomPage,
    handlePageChanges
  }
)(Dashboard);
