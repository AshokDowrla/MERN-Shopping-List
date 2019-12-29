

import { Container, Button, ListGroup, ListGroupItem } from "reactstrap"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux"
import { getItems, deleteItem } from "../store/actions/itemActions"
import { bindActionCreators } from "redux"
import React, { Component } from 'react'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    onDelete =(id) =>{
        //console.log(id)
          this.props.deleteItem(id)
    }
    render() {
        const { items } = this.props.item
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) =>
                            (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="sm" onClick={()=>this.onDelete(_id)}>&times;</Button>
                                        {name}
                                    </ListGroupItem>

                                </CSSTransition>
                            )


                        )}

                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        item: state.item

    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ getItems, deleteItem }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)