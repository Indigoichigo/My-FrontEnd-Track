<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :myName="name"
                    @resetName="name = $event"
                    :resetChildName="resetChildName"
                    :myAge="age"
                    
                >
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :myAge="age"
                    @ageWasEdited="age = $event"
                >
                </app-user-edit>
            </div>
        </div>
    </div>
</template>



<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    var data = {
        name: 'Max',
        age: 27,
    }

    export default {
        data: function() {
                return data
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
            resetChildName() {
                this.name = 'Max';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
