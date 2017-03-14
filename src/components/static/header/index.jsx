import React from 'react'
import Navbar from '../navbar'
import './index.scss'

const header = (props) => {
  return <div className="header">
    <h1>{props.localization.header.title}</h1>
    <Navbar location={props.location} localization={props.localization} />
  </div>;
}

export default header;
