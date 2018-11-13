import React, { Component } from "react";
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

function getModalStyle() {
    return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };
}

class Modal extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()}>
                    {children}
                </div>
            </Modal>
        );
    }
}

Modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Modal;