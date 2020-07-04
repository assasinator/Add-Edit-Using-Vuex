import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Add from '../components/Add';
import Edit from '../components/Edit';


Vue.use(VueRouter);

  const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/Add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
