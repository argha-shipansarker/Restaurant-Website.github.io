import React from 'react'
import "./showbooks.css"
import { withRouter, Link } from "react-router-dom"

function showbooks(props) {
    return (
        <Link to={"/" + props.book.id}>
            <div className="book" onClick={() => props.select(props.book.id)}>
                <h2>Name: {props.book.name}</h2>
                <h4>Writter: {props.book.writter}</h4>
            </div>
        </Link>
    )
}

export default withRouter(showbooks)
