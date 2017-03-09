import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/wrapper/App';
import Services from './components/services';
import About from './components/about';
import Contacts from './components/contacts';
import News from './components/news';
import Service from './components/service';
import NotFound from './components/notFound';

var routes =  <div>
                <Route path="/" component = {App}>
                  <IndexRoute components = {{main: Services}} />
                  <Route path="about" components = {{main: About}} />
                  <Route path="services" components = {{main: Services}}>
                    <Route path=":service" components = {{main: Service}} />
                  </Route>
                  <Route path="services" components = {{main: Services}} />
                  <Route path="contacts" components = {{main: Contacts}} />
                  <Route path="news" components = {{main: News}}/>
                  <Route path="*" components = {{main: NotFound}}/>
                </Route>
              </div>;



export default routes;
