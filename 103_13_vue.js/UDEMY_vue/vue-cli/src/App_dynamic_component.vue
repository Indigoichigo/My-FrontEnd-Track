<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'Quote'">Quote</button>
                <button @click="selectedComponent = 'News'">News</button>
                <button @click="selectedComponent = 'Article'">Article</button>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
                <!-- <Quote>
                    <h1 slot="title">hello, Vue</h1>
                    <p slot="test">slot</p>
                    <p slot="content">this html text pass by slot</p>
                </Quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components_pass_props/Quote.vue';
    import News from './components_pass_props/News.vue';
    import Article from './components_pass_props/Article.vue';

    export default {
        data: function() {
            return {
                selectedComponent: 'Quote'
            }
        },
        components: {
            Quote,
            News,
            Article,
        }
    }
</script>

<style>
    .box {
        border: 1px solid #999
    }
    
</style>
