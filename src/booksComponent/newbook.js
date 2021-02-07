import React, { Component, createRef } from 'react';

class Newbook extends Component {
    constructor(props) {
        super(props);
        this.bookname = createRef();
        this.writter = createRef();
        this.description = createRef();

    }

    handleSubmit = event => {
        console.log(this.bookname.current.value);
        console.log(this.writter.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{ textAlign: "center" }} >
                <h2>New Book Entry</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookname" ref={this.bookname} />
                    <br />
                    <lebel>Writter: </lebel>
                    <br />
                    <input type="text" name="writter" ref={this.writter} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="description" ref={this.description} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Newbook;