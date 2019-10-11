import React from "react";
import { connect } from "react-redux";
import Quote from "./Quote";

function GetQuotes(props) {
  console.log("props", props);

  if (props.isFetching) {
    return <h2>Loading Quotes...</h2>;
  } else if (props.quotes.length <= 4) {
    return (
      <div className="quote-container">
        {props.error && <p>{props.error}</p>}
        {props.quotes.map(item => (
          <Quote
            key={item._id}
            author={item.quoteAuthor}
            text={item.quoteText}
          />
        ))}
      </div>
    );
  } else if (props.search) {
    return (
      <div className="quote-container">
        {props.error && <p>{props.error}</p>}
        {props.quotes
          .filter(
            quote =>
              quote.quoteAuthor
                .toLowerCase()
                .includes(props.search.toLowerCase()) ||
              quote.quoteText.toLowerCase().includes(props.search.toLowerCase())
          )
          .slice(
            props.page === 0 ? 0 : props.page * 4,
            props.page === 0 ? 4 : props.page * 4 + 4
          )
          .map(item => (
            <Quote
              key={item.id}
              author={item.quoteAuthor}
              text={item.quoteText}
            />
          ))}
      </div>
    );
  } else {
    return (
      <div className="quote-container">
        {props.error && <p>{props.error}</p>}
        {props.quotes
          .slice(
            props.page === 0 ? 0 : props.page * 4,
            props.page === 0 ? 4 : props.page * 4 + 4
          )
          .map(item => (
            <Quote
              key={item.id}
              author={item.quoteAuthor}
              text={item.quoteText}
            />
          ))}
      </div>
    );
  }
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
  {}
)(GetQuotes);
