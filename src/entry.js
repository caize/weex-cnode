import router from './router';
import App from './App.vue';
// import filters from './filters';
// import { sync } from 'vuex-router-sync';
// import store from './vuex';

// sync(store, router);

// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key]);
// });

new Vue(Vue.util.extend({ el: '#root', router}, App));

router.push('/');
