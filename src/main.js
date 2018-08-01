// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import navigation from './components/Navigation'
import Artsummary from './components/Artsummary'
import Card from './components/myCard'
import Pagelist from './components/Pagelist'
import Hotcard from './components/Hotcard'
import Artlist from './components/Artlist'
import Artinfo from './components/Artinfo'
import Arteditor from './components/Arteditor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor);
Vue.use(ElementUI);
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.component('mynav',navigation);
Vue.component('myarticlecard',Artsummary);
Vue.component('mycard',Card);
Vue.component('mypagelist',Pagelist);
Vue.component('myhotcard',Hotcard);
Vue.component('myartlist',Artlist);
Vue.component('myartinfo',Artinfo);
Vue.component('myeditor',Arteditor);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
