import React from 'react';



const contacts = (props) => {
  const {localization} = props;
  return <h2>{localization.contacts.title}</h2>;
}

export default contacts;
