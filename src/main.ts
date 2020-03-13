import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import VueCompositionApi from '@vue/composition-api';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.scss';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
