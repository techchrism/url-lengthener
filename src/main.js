import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';
import {decode} from '@/encoding/EncodingLibrary';

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
        const loc = decode(window.location.hash.substring(1));
        if(loc.startsWith('http://') || loc.startsWith('https://'))
        {
            window.location.href = loc;
        }
    }
}
