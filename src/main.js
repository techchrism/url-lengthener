import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';

localforage.config({
    name: 'url-lengthener'
});

Vue.config.productionTip = false;
Vue.use(Vuetify);

localforage.getItem('theme').then(theme =>
{
    new Vue({
        vuetify: new Vuetify({
            theme: {
                dark: theme !== 'light'
            }
        }),
        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
});
