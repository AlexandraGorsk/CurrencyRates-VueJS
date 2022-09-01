// import { createApp } from 'vue';
// import App from './App.vue';
// // import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import store from './vuex/store';
// // createApp(App).use(Antd).mount('#app');

// const app = createApp(App);
// // app.use(store);
// app.use(store); // same as Vue.use in Vue 2.X

// app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).use(store).mount('#app');
