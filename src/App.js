import React, { Component } from 'react';
import './App.css';

class ButtonHerencia extends Component {
  constructor( props) {
    super(props);
    this.borderColor = '#09f'
  }

  render() {
    return(
      <button style={{ borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}

class ButtonPeligro extends ButtonHerencia {
  constructor(props) {
    super(props)
    this.borderColor = 'red'
  }
}

class ButtonConLeyenda extends ButtonHerencia {
  render() {
    return (
      <div>
        {super.render()}
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class ButtonComposicion extends Component {
  render() {
    return(
      <button style={{ borderColor: this.props.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}

class ButtonPeligroComposicion extends Component {
  render() {
    return (
      <ButtonComposicion label={this.props.label} borderColor='red' />
    )
  }
}

class ButtonConLeyendaComposicion extends Component {
  render() {
    return (
      <div>
        <ButtonComposicion label = {this.props.label} borderColor={this.props.borderColor} />
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component{
 render(){
  return (
    <div className="App">
      <h4>Composición vs Herencia</h4>
      <ButtonHerencia label='Click aquí herencia!!!' />
      <br />
      <ButtonPeligro label = 'Click aquí herencia!!! Peligro' />
      <br />
      <ButtonConLeyenda legend = 'Leyenda' label = 'Click aquí herencia!!! Leyenda' />
      <br/><br/><br/>
      <ButtonComposicion label='Click aquí composicion!!!' />
      <br />
      <ButtonPeligroComposicion label = 'Click aquí composicion!!! Peligro' />
      <br />
      <ButtonConLeyendaComposicion legend = 'Leyenda' label = 'Click aquí composicion!!! Leyenda' />
    </div>
  );
 }
}

export default App;
