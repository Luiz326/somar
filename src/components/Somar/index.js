import React, { Component } from 'react';

class Soma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soma: {
                numero1: 0,
                numero2: 0,
                total: 0
            }

        };

        this.somar = this.somar.bind(this);

    }

    somar(e) {
        let soma = this.state.soma;
        soma[e.target.name] = e.target.value;
        this.setState({ soma: soma });
    }

    render() {
        return (
            <div >
                <input id="n1" name="numero1" type="number" value={this.state.soma.numero1} onChange={this.somar} />
                <span>+</span>
                <input id="n2" name="numero2" type="number" value={this.state.soma.numero2} onChange={this.somar} />
                <span> = </span>
                <input id="total" name="total" type="number" value={parseInt(this.state.soma.numero1)  + parseInt(this.state.soma.numero2) } />
            </div>

        )
    }
}

export default Soma;