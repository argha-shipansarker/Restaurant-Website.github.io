import React, { Component } from 'react';
import { Form, Button, Input } from "reactstrap"
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => {
    return {
        add_comment: (dishId, author, comment, rating) => dispatch({
            type: "ADD_COMMENT",
            payload: {
                author: author,
                comment: comment,
                rating: rating,
                dishId: dishId,
            }
        })
    }
}


class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            comment: "",
            rating: "",
        }
        this.handalInputChange = this.handalInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handalInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // console.log(this.state);

        this.props.add_comment(this.props.dishId, this.state.author, this.state.comment, this.state.rating)

        this.setState({
            author: "",
            comment: "",
            rating: "",
        })
        event.preventDefault();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        required
                        onChange={this.handalInputChange} />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handalInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        required
                        onChange={this.handalInputChange} />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);