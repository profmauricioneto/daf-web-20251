import React, { Component } from 'react';

class Duck extends Component {
    state = {
        name: this.props.name,
        speak: this.props.speak,
    }
    constructor(props) {
        super(props);
        this.setName = this.setName.bind(this);
        this.setSpeak = this.setSpeak.bind(this);
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
                <input type="text" placeholder='duckname' value={name} onChange={this.setName} />
                <input type="text" placeholder='duck speak' value={speak} onChange={this.setSpeak}/>
            </>
        );
    }
};

export default Duck;