import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import ShowComment from "./ShowComment"

function ItemDescription({ item, comments }) {

    const comment = comments.filter(comment => item.id === comment.dishId);
    const comm = comment.map(comment => <ShowComment comment={comment} />)
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
                    <CardText style={{ textAlign: "left" }}>
                        {comm}
                    </CardText>


                </CardBody>
            </Card>
        </div >
    )
}

export default ItemDescription
