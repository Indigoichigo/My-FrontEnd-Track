<template>
  <ul class="nav nav-pills">
      <router-link class="cus-li" to="/" tag="li" active-class="active" exact>Home</router-link>
      <router-link class="cus-li" to="/user" tag="li"  active-class="active">User</router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .cus-li {
        cursor: pointer;
        margin-right: 10px;
        background-color: #ccc;
        padding: 5px;

        &:hover,
        &:active {
            background-color: #f00;
        }
    }
</style>