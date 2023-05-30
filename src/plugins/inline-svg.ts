import InlineSVG from 'vue-inline-svg';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('inline-svg', InlineSVG);
});
