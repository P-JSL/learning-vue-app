/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue/dist/vue.esm-bundler.js';

import App from './App.vue'

// 1. app instance
const app = createApp(App)

app.mount('#app')
