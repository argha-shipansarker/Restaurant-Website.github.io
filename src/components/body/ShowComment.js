import React from 'react'
import dateformat from "dateformat"

function ShowComment({ comment }) {
    return (
        <div>
            <hr />
            <h5>{comment.author}</h5>
            <h4>{comment.rating}</h4>
            <h6>{comment.comment}</h6>
            {dateformat(comment.date, "dddd, mmmm dS, yyyy")}

        </div>
    )
}

export default ShowComment
