import Vue from 'vue'
import Router from 'vue-router'

//Routers
import RouterIndex from '@/components/Routers/Index'
import RouterCreate from '@/components/Routers/CreateRouter'
import RouterEdit from '@/components/Routers/EditRouter'
import RouterShow from '@/components/Routers/ShowRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/routers',
      name: 'routers',
      component: RouterIndex
    },
    {
      path: '/router/create',
      name: 'router-create',
      component: RouterCreate
    },
    {
      path: '/router/edit/:routerId',
      name: 'router-edit',
      component: RouterEdit
    },
    {
      path: '/router/:routerId',
      name: 'router',
      component: RouterShow
    }
  ]
})
