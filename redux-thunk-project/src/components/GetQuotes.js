import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandom, fetchAll, pageUp, pageDown } from "../actions";
import Quote from "./Quote";

function GetQuotes(props) {
  console.log("props", props);

  if (props.isFetching) {
    return <h2>Loading Quotes...</h2>;
  } else if (props.quotes.length <= 10) {
    return (
      <div>
        {props.error && <p>{props.error}</p>}
        {props.quotes.map(item => (
          <Quote
            key={item._id}
            author={item.quoteAuthor}
            text={item.quoteText}
          />
        ))}
        <button onClick={props.fetchRandom}>Random Quote</button>
        <button onClick={props.fetchAll}>All Quotes</button>
      </div>
    );
  } else {
    return (
      <div>
        {props.error && <p>{props.error}</p>}
        {props.quotes
          .slice(
            props.page === 0 ? 0 : props.page * 10,
            props.page === 0 ? 9 : props.page * 10 + 10
          )
          .map(item => (
            <Quote
              key={item.id}
              author={item.quoteAuthor}
              text={item.quoteText}
            />
          ))}
        <p>Page: {props.page + 1}</p>
        <button className={props.page === 0 ? "unavailable" : ""} onClick={props.pageDown}>
          Previous
        </button>
        <button className={props.page === 20 ? "unavailable" : ""} onClick={props.pageUp}>Next</button>
        <button onClick={props.fetchRandom}>Random Quote</button>
        <button onClick={props.fetchAll}>All Quotes</button>
      </div>
    );
  }
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
)(GetQuotes);
