import React, { Component } from 'react';
import DISHES from "../../data/dishes";
import Comments from "../../data/comments"
import ItemShow from "./ItemShow"
import ItemDescription from "./ItemDescription";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap"

class Menu extends Component {
    state = {
        dish: DISHES,
        comments: Comments,
        description: null,
        modalOpen: false,
    }

    show_description = (item) => {
        this.setState(
            {
                description: <ItemDescription item={item} comments={this.state.comments} />,
                modalOpen: !this.state.modalOpen,
            }
        )
    }
    toggleModal = () => {
        this.setState(
            {
                modalOpen: !this.state.modalOpen,
            }
        )
    }

    render() {
        document.title = "Menu"
        const items = this.state.dish.map(item => (
            <ItemShow
                item={item}
                key={item.id}
                description={this.show_description} />
        ))
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {items}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {this.state.description}
                        </ModalBody>
                        <ModalFooter>
                            <Button className="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;