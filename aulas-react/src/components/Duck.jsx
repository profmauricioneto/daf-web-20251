import React, { Component } from 'react';

class Duck extends Component {
    state = {
        name: this.props.name,
        speak: this.props.speak,
    }

    setName(event) {
        this.setState({name: event.target.value});
    }
    setSpeak(event) {
        this.setState({speak: event.target.value});
    }
    render() {
       const {name, speak} = this.state;
        return(
            <>
                <h2>Testando a classe pato!</h2>
                <p>Olá meu nome é {name} Duck e eu faço {speak}</p>
                <input type="text" placeholder='duckname' value={name} onChange={e => this.setName(e)} />
                <input type="text" placeholder='duck speack' value={speak} onChange={e => this.setSpeak(e)}/>
            </>
        );
    }
};

export default Duck;