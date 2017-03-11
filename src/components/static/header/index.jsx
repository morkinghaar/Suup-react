import React from 'react'
import Localization from '../../../stores/localization.js'
import './index.scss'

const header = () => {
  return <div className="header">
    <h1>{Localization.header.title}</h1>
    <hr />
  </div>;
}

export default header;
