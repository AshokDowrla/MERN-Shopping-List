

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {addItem} from "../store/actions/itemActions"
import React, { Component } from 'react'
import { connect } from 'react-redux';

class ItemModal extends Component {
    state = {
        modalOpen: false,
        name: ''
    }


    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    onChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
      e.preventDefault()


      //console.log(e)
      const newItem ={
          name:this.state.name
      }
      this.props.addItem(newItem)

      this.toggle()
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                    Add Item
                </Button>

                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>

                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                            </FormGroup>
                            <Input
                                type='text'
                                name='name'
                                id='item'
                                placeholder='Add shopping item'
                                onChange={this.onChange}
                            />
                            <Button color='dark' style={{ marginTop: '2rem' }} block>
                                Add Item
                            </Button>
                        </Form>

                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemModal)
