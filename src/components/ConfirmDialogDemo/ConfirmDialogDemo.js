import React, { Component } from 'react'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog'
import { Button } from 'react-bootstrap'

class ConfirmDialogDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { showConfirm: false }
    }
    render() {
        const open = () => {
            this.setState({ showConfirm: true })
        }
        const handleCancel = () => this.setState({ showConfirm: false })
        const handleConfirm = () => {
            console.log('confirm it')
            this.setState({ showConfirm: false })
        }

        return (
            <div>
                <ConfirmDialog
                    size="lg"
                    title="Confirm delete"
                    content="Are you sure you want to delete ?"
                    show={this.state.showConfirm}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                />
                <Button variant="warning" onClick={open}>
                    Warning
                </Button>{' '}
            </div>
        )
    }
}

export default ConfirmDialogDemo
