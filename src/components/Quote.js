import React from 'react'

export default function Quote(props) {
    return (
        <div className='quote'>
            <p className='quote-text'>"{props.text}"</p>
            <p className='quote-author'> - {props.author ? props.author : 'Unknown'}</p>
        </div>
    )
}

