import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import AppFilterMixin from './App_Filter_Mixin.vue'
// import AppForm from './App_form.vue';
// import AppDynamicComponent from './App_dynamic_component.vue';
// import AppDirective from './App_directive.vue'
// import AppHTTP from './App_HTTP.vue';
// import AppRouter from './App_Router.vue';
// import { routes } from './routers';
import AppVuex from './App_vuex.vue';
import { store } from './store_vuex/store';


new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(AppVuex)
})

// Vue router
// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })


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
// --------------------------------------------------
// vue-resource
// Vue.use(VueResource);
// global 不需要加$
// Vue.http.options.root = 'https://vuejs-http-f036b.firebaseio.com/data.json';

// 攔截送出去的request
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   // 下面指如果用POST方法送出，改為用PUT，PUT方法會複寫原本資料，POST是新增一筆
//   if(request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => {
//     // 攔截回來的response 還不知道要幹嘛 ..
//     response.json = () => ({
//       messages: response.body
//     })
//   });
// })