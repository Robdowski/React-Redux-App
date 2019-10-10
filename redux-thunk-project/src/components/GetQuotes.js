import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRandom } from '../actions'
import Quote from './Quote'


function GetQuotes(props) {
    console.log('props', props)
    useEffect(() => {
        props.fetchRandom()
    }, [])

    

    if (props.isFetching) {
        return <h2>Loading Quotes...</h2>
    }
    return (
        <div>
        {props.error && <p>{props.error}</p>}
        {props.quotes.map(item => (
            <Quote key={item._id} author={item.quoteAuthor} text={item.quoteText} />
        ))}
        <button onClick={props.fetchRandom}>Load Another</button> 
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
    quotes: state.quotes,
    isFetching: state.isFetching,
    error: state.error
    }
} 

export default connect(mapStateToProps, { fetchRandom })(GetQuotes)