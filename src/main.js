import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import favicon from './assets/favicon.ico'

createApp(App).mount('#app')


console.log(favicon);
const faviconBlock = document.createElement("style");
faviconBlock.setAttribute("rel", "icon");
faviconBlock.setAttribute("href", favicon);
document.head.appendChild(faviconBlock);
console.log(faviconBlock);