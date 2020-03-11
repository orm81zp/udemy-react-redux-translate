import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderButton(language) {
    const text = language === 'english' ? 'Submit' : 'Voorleggen';

    return (
      <ColorContext.Consumer>
        { (color) => {
          return (
            <button className={`ui button ${color}`}>{text}</button>
          )
        }}
      </ColorContext.Consumer>
    )
  }

  render() {
    return (
      <LanguageContext.Consumer>
        { ({ language }) => this.renderButton(language) }
      </LanguageContext.Consumer>
    );
  }
}

export default Button;
