import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap';
import "./css/styles.scss";

import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from "./vueComponents/exmpleComponent.vue";
app.component('example-component', ExampleComponent);

app.mount('#app');