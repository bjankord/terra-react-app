import React, { Component } from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import Alert from 'terra-alert';
import logo from './logo.svg';
import './App.css';

const locales = ['en', 'en-AU', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLocale: 'en'
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Base locale={this.state.selectLocale}>
        <div className="App">
          <Alert type="success">Your Terra UI + Create React App works!</Alert>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              text="Learn React"
              variant="emphasis"
            />
            <p>
              <label htmlFor="locale-switcher">Select locale</label>
              <select id="locale-switcher" className="locale-switcher" name="selectLocale" value={this.state.selectLocale} onChange={this.handleSelectChange}>
                {locales.map((locale) => <option key={locale} value={locale}>{locale}</option>)}
              </select>
            </p>
          </header>
        </div>
      </Base>
    );
  }
}

export default App;
