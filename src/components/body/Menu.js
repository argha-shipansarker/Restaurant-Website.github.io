import React, { Component } from 'react';
import ItemShow from "./ItemShow"
import ItemDescription from "./ItemDescription";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        dish: state.dishes,
        comments: state.comments,
    }
}

class Menu extends Component {
    state = {
        description: null,
        modalOpen: false,
    }

    show_description = (item) => {
        this.setState(
            {
                description: <ItemDescription item={item} key={item.id} />,
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
        console.log(this.props.comments);
        document.title = "Menu"
        const items = this.props.dish.map(item => (
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
                    <Modal isOpen={this.state.modalOpen}>
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

export default connect(mapStateToProps)(Menu);