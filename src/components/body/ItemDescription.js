import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import ShowComment from "./ShowComment"
import CommentForm from "./CommentForm"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        comments: state.comments,
    }
}

function ItemDescription({ item, comments, add_comment }) {
    console.log(comments);

    const comment = comments.filter(comment => item.id === comment.dishId);
    console.log(comment);
    const comm = comment.map(comment => <ShowComment comment={comment} key={comment.id} />)
    return (
        <div>
            <Card className="my-2">
                <CardImg top width="100%" src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>

                    <CardText style={{ textAlign: "left" }}>
                        {item.description}
                    </CardText>
                    <CardText style={{ textAlign: "left" }}>
                        Price: {item.price}/-
                    </CardText>
                    <div style={{ textAlign: "left" }}>
                        {comm}
                    </div>
                    <hr />
                    <CommentForm dishId={item.id} add_comment={add_comment} />

                </CardBody>
            </Card>
        </div >
    )
}

export default connect(mapStateToProps)(ItemDescription);
