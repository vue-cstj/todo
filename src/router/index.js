import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/Index.vue';
import TacheIndex from '../views/Tache/Index.vue';
import TacheCreate from '../views/Tache/Create.vue';
import TacheShow from '../views/Tache/Show.vue';
import TacheEdit from '../views/Tache/Edit.vue';
import TacheDelete from '../views/Tache/Delete.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: IndexView
        },
        {
            path: '/tache',
            name: 'tache.index',
            component: TacheIndex,
        },
        {
            path: '/tache/create',
            name: 'tache.create',
            component: TacheCreate,
        },
        {
            path: '/tache/:id',
            name: 'tache.show',
            component: TacheShow,
            props: true,
        },
        {
            path: '/tache/:id/edit',
            name: 'tache.edit',
            component: TacheEdit,
            props: true,
        },
        {
            path: '/tache/:id/delete',
            name: 'tache.delete',
            component: TacheDelete,
            props: true,
        },
    ]
});

export default router;
