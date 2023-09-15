/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import Framework7 from 'framework7/lite/bundle';
import Framework7Vue from 'framework7-vue';
import App from './App.vue';

import 'material-icons/iconfont/material-icons.css';
import 'framework7-icons'
import 'framework7/css/bundle';
import './style.css';

// Demo
/* eslint-disable */
if (document.location.href.includes('safe-areas')) {
    const html = document.documentElement;
    if (html) {
        html.style.setProperty('--f7-safe-area-top', '44px');
        html.style.setProperty('--f7-safe-area-bottom', '34px');
    }
}
if (document.location.search.indexOf('mode=') >= 0) {
    const mode = document.location.search.split('mode=')[1].split('&')[0];
    if (mode === 'dark') document.documentElement.classList.add('dark');
}
if (document.location.href.includes('example-preview')) {
    document.documentElement.classList.add('example-preview');
}
/* eslint-enable */

Framework7.use(Framework7Vue);

// Init Vue App
const app = createApp(App);

app.mount('#app');
