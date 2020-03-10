import React from 'react';
import withHoc from './witHoc';

const translations = {
  'english': {
    submit: 'Submit'
  },
  'dutch': {
    submit: 'Volegged'
  },
};

class Button extends React.Component {
  render() {
    const { language } = this.props;
    const text = translations[language]['submit'];

    return (
      <button className={`ui button ${this.props.color}`}>
        {text}
      </button>
    );
  }
}

export default withHoc(Button);
