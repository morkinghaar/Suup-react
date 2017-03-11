import React from 'react';
import {Link} from 'react-router';

const navlink = (props) => {
  return <Link {...props} activeClassName="active"/>;
}

export default navlink;
