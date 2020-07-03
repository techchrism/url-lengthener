import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';
import {aaaDecode} from './aaaEncoding';

if(window.location.hash === '')
{
    localforage.config({
        name: 'url-lengthener'
    });
    
    Vue.config.productionTip = false;
    Vue.use(Vuetify);
    
    localforage.getItem('theme').then(theme =>
    {
        if(!theme)
        {
            theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        }
        
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
}
else
{
    window.onload = function()
    {
        window.location.href = aaaDecode(window.location.hash.substring(1));
    }
}
