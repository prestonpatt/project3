import React from 'react';
import Modal from '../Modal/Modal';
import Master from '../InfoForm/Master';

const style = {
    h1: {
        fontSize: "1.2rem"
    }
}

class Splash extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
                 
    }
    }
    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div>
                <h1 style={style.h1}> Welcome To ... click start to begin register process</h1>
                {this.state.showModal ?
                    <Modal opened='true' onClose={this.hideModal} ><Master onFinish={this.hideModal}/></Modal>
                    : null}
                <div>
                    <button onClick={this.showModal}>Start</button>
                </div>
            </div>
        )
    }
}

export default Splash;