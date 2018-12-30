<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">email</label>
                    <input class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <button class="btn btn=primary" @click="fetchData">Get Data</button>
                <ul>
                    <li v-for="u in users" :key="u">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
            }
        },
        methods: {
            submit() {
                // this.$http.put('', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, error => {
                //         console.log(error);
                //     });
                this.resource.save({}, this.user)
            },
            fetchData() {
                this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        console.log(this.resultArray)
                        this.users = resultArray;
                    });
            },
        },
        created() {
            this.resource = this.$resource('data.json');
        }
    }
</script>

<style>
</style>
