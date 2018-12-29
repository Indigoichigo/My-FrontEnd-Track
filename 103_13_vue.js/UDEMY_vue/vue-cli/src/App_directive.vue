<template>
  <div>
    <h1>Custom Directive</h1>
    <p v-highlight:delayed="'#f00'">hello, highlight</p>
    <p v-local-highlight:bgColor.blink="'#0f0'">hello, highlight, too</p>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        
        let delay = 0;

        if(binding.arg = 'bgColor') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.backgroundColor = '#f0f';
        }

        //modifiers屬性可以設定modifier，它是一個陣列


        if( binding.modifiers['blink'] ) {
          let mainColor = binding.value;
          let subColor = '#00f';
          let currentColor = mainColor;
          setTimeout(() =>{
            setInterval(() => {
              currentColor == mainColor ? currentColor = subColor : currentColor = mainColor;
              el.style.color = currentColor;
            },1000)
          })

          setTimeout(()=>{console.log('!')}, 1000)
        } else {
          setTimeout(()=>{console.log('!!')}, 1000)
        }




        
      }
    }
  }
};
</script>

<style>
</style>