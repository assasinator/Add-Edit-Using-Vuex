import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Add from '../components/Add';
import Edit from '../components/Edit';


Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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

]

const router = new VueRouter({
  routes
})

export default router
