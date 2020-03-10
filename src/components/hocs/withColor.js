import React from 'react';
import ColorContext from '../../contexts/ColorContext';

const withColor = (WrappedComponent) => {
  class Component extends React.Component {
    render() {
      return <ColorContext.Consumer>
        { (color) => {
          return <WrappedComponent
            {...this.props}
            color={color}
          />
        }}
      </ColorContext.Consumer>
    }
  }

  return Component;
}

export default withColor;
