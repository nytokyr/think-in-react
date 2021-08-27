import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import _ from 'lodash'

class ConfirmDialog extends Component {
    render() {
        const { onCancel, onConfirm, content, title, show, size } = this.props
        const openProp = {}
        if (_.has(this.props, 'show')) openProp.show = show

        return (
            <Modal {...openProp} onHide={onCancel} size={size}> 
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{content}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default ConfirmDialog
