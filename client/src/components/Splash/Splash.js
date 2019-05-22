import React from 'react';
import Modal from '../Modal/Modal';
import Master from '../InfoForm/Master';
import Background1 from '../../background1.jpg'

const style = {
    button: {
        marginTop: 5
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
            <div style={{backgroundImage: "url(" + Background1 + ")", height: '100vh', width:"100vw", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                {this.state.showModal ?
                    <Modal opened='true' onClose={this.hideModal} ><Master onFinish={this.hideModal}/></Modal>
                    : null}
                <div>
                    <button style={style.button} onClick={this.showModal}>Click start to begin register process</button>
                </div>
            </div>
        )
    }
}

export default Splash;