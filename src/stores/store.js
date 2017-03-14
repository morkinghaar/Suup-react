import {observable, autorun, extendObservable, action} from "mobx";



class langStore {
  @observable currentLang
  @observable defaultLang
  constructor() {
        this.currentLang = ''
        this.defaultLang = 'eng'
    }

}

const lang = new langStore

autorun(()=> {
  console.log("Current lang was set to " +lang.currentLang)
});

export default lang;
