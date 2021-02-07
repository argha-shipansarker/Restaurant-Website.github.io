import React from 'react'

function bookdetails(props) {
    let name, writter;
    if (props.book != null) {
        name = props.book.name;
        writter = props.book.writter;
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{writter}</h1>
        </div>
    )
}

export default bookdetails
