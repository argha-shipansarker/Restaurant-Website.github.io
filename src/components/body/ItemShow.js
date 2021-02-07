import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

const ItemShow = ({ item, description }) => {
    return (
        <div>
            <Card className="my-2">
                <CardBody>
                    <CardImg src={item.image} alt="Card image cap" style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle tag="h5" onClick={() => description(item)} style={{ cursor: "pointer", textAlign: "center" }}>{item.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemShow
