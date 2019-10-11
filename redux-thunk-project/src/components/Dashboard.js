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
        <button onClick={props.fetchRandom}>Random Quote</button>
        <h1>Robert's Quote Generator</h1>
        <button onClick={props.fetchAll}>All Quotes</button>
      </div>

      {props.quotes.length > 1 && (
        <div className="search-container">
          <label htmlFor="search">Search: </label>
          <input type="text" name="search" onChange={props.handleChanges} />
          <button className="random-button" onClick={props.randomPage}>
            Random Page
          </button>
        </div>
      )}

      <div className="page-container">
        <button
          className={props.page === 0 ? "unavailable" : ""}
          onClick={props.pageDown}
        >
          Previous
        </button>
        <p>Page: {Number(props.page)}</p>
        {props.quotes.length > 1 && (
          <div className="page-input-container">
            <label htmlFor="page" name="page">
              Page Select:&nbsp;
            </label>
          <input
          className='page-input'
          name='page'
          htmlFor='page'
          onChange={props.handlePageChanges}
          />
            / {Math.floor(props.quotes.length /4)}
          </div>
        )}
        <button onClick={props.pageUp}>Next</button>
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
