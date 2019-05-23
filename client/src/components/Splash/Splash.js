import React from 'react';
import Modal from '../Modal/Modal';
import Master from '../InfoForm/Master';
import Background3 from '../../background3.jpg'

const style = {
    button: {
        margin: 5,
        color: "white",
        backgroundColor: "#5A8465",
        borderColor: " #5A8465",
        padding: 5,
    },
    
    background: {
        height: 100,
        width: 100
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
            <div style={{backgroundImage: "url(" + Background3 + ")", height: '100vh', width:"100vw", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                {this.state.showModal ?
                    <Modal opened='true' onClose={this.hideModal} ><Master onFinish={this.hideModal}/></Modal>
                    : null}
                <div>
                    <button style={style.button} onClick={this.showModal}>Click here to register</button>
                </div>
            </div>
        )
    }
}

export default Splash;