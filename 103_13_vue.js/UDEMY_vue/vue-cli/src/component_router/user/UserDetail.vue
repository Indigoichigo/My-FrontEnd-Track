<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="{ name: 'userEdit',
                    params: { id: $route.params.id },
                    query: { lang: 'en', greeting: 'hello'}   
            }">Edit Page
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>