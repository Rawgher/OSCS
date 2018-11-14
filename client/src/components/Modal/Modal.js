import React, { Component } from "react";
import MUIModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
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
        return ({ children }) => (
            <MUIModal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()}>
                    {children}
                </div>
                <Button onClick={this.handleClose}>Close</Button>
            </MUIModal>
        );
    }
}

Modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Modal;