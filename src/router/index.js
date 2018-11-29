import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import loginComponent from '@/pages/login/'
import homeComponent from '@/pages/home/'
import usersComponent from '@/pages/home/users'

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: loginComponent
    },
    {
      path: '/home',
      component: homeComponent,
      children:[
        {path:'users',component:usersComponent}
      ]
    },
  ]
})
