import React, { Component } from 'react';
import Books from "./data/books";
import ShowBooks from "./booksComponent/showbooks"
import NewBook from "./booksComponent/newbook"
import "./booksComponent/showbooks.css"
import { Route, NavLink, Link, Switch, Redirect } from "react-router-dom"
import BookDetails from "./booksComponent/bookdetails"


class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: Books,
            selected_book: null,
        }
    }
    select = index => {
        const book = this.state.books.filter(book => book.id === index)[0];
        this.setState(
            {
                selected_book: book
            }
        )
    }

    render() {
        const books = this.state.books.map(book => <ShowBooks
            book={book}
            key={book.id}
            select={this.select} />)

        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new">New</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/book" exact render={() => books} />
                    <Route path="/new" exact component={NewBook} />
                    <Route path={"/:id"} exact render={() => <BookDetails book={this.state.selected_book} />} />
                    <Redirect from="/" to="/book" />
                </Switch>
            </div>
        );
    }
}

export default Book;