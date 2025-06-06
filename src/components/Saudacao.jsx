import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props)

        // this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    setTipo(e) {
        let i = 1
        setInterval(() => {
            this.setState({ tipo: i++ })
        }, 1000);
        
        //this.setState({ tipo: 'testando tipo' }); {/* e.target.value */}
    }

    render() {
        const { tipo, nome } = this.state

        return (
            <div>
                <h1> {tipo} {nome}! </h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo}
                    onChange={e => this.setTipo(e)} />

                <input type="text" placeholder="Nome..."
                    value={nome}
                    onChange={ this.setNome } />
            </div>
        )
    }
}