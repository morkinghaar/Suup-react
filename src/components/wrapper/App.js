import React from 'react';
import Header from '../static/header';
import Navbar from '../static/navbar';
import Footer from '../static/footer';
//import store from '../../stores/store.js';
import {observable, observer, inject} from 'mobx-react';
import cookie from 'react-cookie';
import Localization from '../../stores/localization.js';
import Helmet from 'react-helmet';








@inject('store')
@observer class App extends React.Component {

  componentWillMount() {
    //console.log(this.props.store.currentLang)
    const {store} = this.props
    if(this.props.location.query.locale != null){
      var avilableLangs = Localization.getAvailableLanguages();
        if(avilableLangs.indexOf(this.props.location.query.locale) >= 0 &&
           avilableLangs.indexOf(this.props.location.query.locale) !== '') {

           store.currentLang = this.props.location.query.locale;
           cookie.save('setLang', store.currentLang, { path: '/' });
          //console.log();
        }
    } else {
      store.currentLang = cookie.load('setLang') || store.defaultLang;
    }
  }


  constructor(props){
    super(props);
  }

  render() {


    const {store} = this.props;
    const {router} = this.props;
    const {location} = this.props;
    Localization.setLanguage(store.currentLang);

    const {main} = this.props;
    return (
      <div>
        <Helmet htmlAttributes={{lang: store.currentLang, amp: undefined}} // amp takes no value
                title="Home"
                titleTemplate="Suup.com - %s"
                defaultTitle="Suup"
                />
              <Header location={location} localization={Localization}/>

        <hr />
        {React.cloneElement(main, {
          localization: Localization
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
