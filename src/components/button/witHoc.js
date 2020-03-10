import React from 'react';
import withColor from '../hocs/withColor';
import withLanguage from '../hocs/withLanguage';

const withHoc = (WrappedComponent) => {
  return withColor(withLanguage(WrappedComponent));
}

export default withHoc;
