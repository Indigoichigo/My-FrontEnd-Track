import Home from './component_router/Home.vue';
import User from './component_router/user/User.vue';
import UserDetail from './component_router/user/UserDetail.vue';
import UserEdit from './component_router/user/UserEdit.vue';
import UserStart from './component_router/user/UserStart.vue';
import Header from './component_router/Header.vue';

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            // 這邊寫/會跑到首頁Home
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        ]
    },
    {
        path: '/redirect-me',
        redirect: { name: 'home' }
    },
    {
        path: '*',
        redirect: '/'
    }

]