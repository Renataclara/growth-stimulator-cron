// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './rou÷÷ter'
import firebase from 'firebase'
import Vuefire from 'vuefire'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBfKDGkycQU0D_-bP7IFTnBrglwSvWf6tM',
  authDomain: 'hazel-goal-178409.firebaseapp.com',
  databaseURL: 'https://hazel-goal-178409.firebaseio.com',
  projectId: 'hazel-goal-178409',
  storageBucket: 'hazel-goal-178409.appspot.com',
  messagingSenderId: '968186368255'
}

var firebaseapp = firebase.initializeApp(config)

Vue.prototype.$db = firebaseapp.database()

Vue.use(Vuefire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
