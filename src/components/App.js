import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english', color: 'red'};

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  onLanguageColor = (color) => {
    this.setState({ color });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <div>
          Select a color:
          <i onClick={() => this.onLanguageColor('red')} > Red </i>
          <i onClick={() => this.onLanguageColor('primary')} > Primary </i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
