import React from 'react';

const about = (props) => {
  const {localization} = props;
  return <h2>{localization.about.title}</h2>;
}

export default about;
