import React from 'react';
import Header from '../static/header';
import Navbar from '../static/navbar';
import Footer from '../static/footer';
import store from '../../stores/store.js';
import {observer} from 'mobx-react';
import cookie from 'react-cookie';
import Localization from '../../stores/localization.js';


@observer class App extends React.Component {
  componentWillMount() {
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

    const {router} = this.props;
    const {location} = this.props;
    Localization.setLanguage(store.currentLang);

    const {main} = this.props;
    return (
      <div>
        <Header />
        <Navbar location={location} localization={Localization}/>
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
