import Vue from 'vue';
import VueResource from 'vue-resource';
// import AppFilterMixin from './App_Filter_Mixin.vue'
// import AppForm from './App_form.vue';
// import AppDynamicComponent from './App_dynamic_component.vue';
// import AppDirective from './App_directive.vue'
import VueHTTP from './Vue_HTTP.vue';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(VueHTTP)
})













// // global filter
//Vue.filter('alpabetLower', (value) => (value.toLowerCase()))


// // global directive
// Vue.directive('highlight', {
//   bind(el, binding, vnode) {
//     // el.style.backgroundColor = binding.value;
//     let delay = 0;
    
//     //modifiers屬性可以設定modifier，它是一個陣列
//     if (binding.modifiers['delayed']) {
//       delay = 3000;
//     }

//     setTimeout(() => {
//       if ( binding.arg == 'bgColor') {
//         el.style.backgroundColor = binding.value;
//         // e.g v-highlight:bgColor="'#f00'"
//       } else {
//         el.style.color = binding.value;
//         // e.g v-highlight="'#f00'"
//       }
//     }, 3000)
//   }
// })