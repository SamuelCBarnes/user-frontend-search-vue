// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.min.css"

// Import Vue3 Easy Data Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App);

app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app')
