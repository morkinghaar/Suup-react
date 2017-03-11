import React from 'react';

import Service from '../service';
import NavLink from '../NavLink';
import store from '../../stores/store';


const home = (props) => {
  const {localization} = props;
  const {main} = props;
  return <div className="services"><h2>{localization.services.title}</h2>
    <ul>
      <li><NavLink to={{pathname: "/services/web", query: {locale: store.currentLang}}} activeStyle={{color: 'red'}}>{localization.service.title}</NavLink></li>
      <li><NavLink to={{pathname: "/services/app", query: {locale: store.currentLang}}} activeStyle={{color: 'red'}}>{localization.service.title}</NavLink></li>
      <li><NavLink to={{pathname: "/services/servers", query: {locale: store.currentLang}}} activeStyle={{color: 'red'}}>{localization.service.title}</NavLink></li>
      <li><NavLink to={{pathname: "/services/etc", query: {locale: store.currentLang}}} activeStyle={{color: 'red'}}>{localization.service.title}</NavLink></li>
    </ul>
    {main}

  </div>;
}

export default home;
