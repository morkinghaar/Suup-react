import {observable} from "mobx";

var lang = observable({
  currentLang: '',
  defaultLang: 'eng'

});


export default lang;
