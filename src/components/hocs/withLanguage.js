import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

const withLanguage = (WrappedComponent) => {
  class Component extends React.Component {
    render() {
      return <LanguageContext.Consumer>
        { (language) => {
          return <WrappedComponent
            {...this.props}
            language={language}
          />
        }}
      </LanguageContext.Consumer>
    }
  }

  return Component;
}

export default withLanguage;
